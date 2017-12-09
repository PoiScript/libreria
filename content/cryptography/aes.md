---
title: AES
category: Cryptography
---

The most common block cipher in current use is Advanced Encryption Standard (AES). Contrary to DES, AES was selected through a public, peer-reviewed competition following an open call for proposals. The block size of AES is 128 bits and key sizes of 128, 192 and 265 bits.

There are no practical known against AES. Some of the development involve related-key attacks. A related-key attack involves making some predictions about how AES will behave under several different keys with some specific mathematical relation. In practice cryptographic keys are generated via a cryptographically secure pseudorandom number generator, or a similarly secure key agreement scheme or key derivation scheme.

Steps
===

AES is not feistel cipher. the number of rounds in AES depends on key length:

| key length | rounds |
|------------|--------|
|        128 |     10 |
|        192 |     12 |
|        256 |     14 |

Each round consists of 4 layers:

1. SubBytes
2. ShiftRow
3. MixColumn
4. KeyAdd

 At a high level, AES is a substitution-permutation network.

key Schedule
---

| key length | number of subkeys |
|------------|-------------------|
|        128 |                11 |
|        192 |                13 |
|        256 |                15 |

AES requires separate keys for each round in the next steps. The key schedule is the process which AES uses to derive 128-bit keys for each round from one master key.

First, the key is separated into 4 byte columns. The key is rotated and then each byte is run through an S-box (substitution-box) that maps it to something else. Each column is then XORed with a round constant. The last step is to XOR the result with the previous round key. The other columns are the XORed with the previous round key to produce the remaining columns.

SubBytes
---

SubBytes is the S-box (substitution-box) in AES. It's 8x8 bits in size.

It works by taking the multiplicative inverse over the Galois field, and then applying an affine transformation so that there are no values $x$ so that $x\oplus S(x)=0$ or $x\oplus S(x)=\text{0xff}$. To rephrase: there are no values of $x$ that the substitution box maps to $x$ itself, or with all bits flipped. This makes the cipher resistant to linear attacks, unlike the earlier DES algorithm.

The S-boxes are identical and the only non-linear elements of AES. Also it's bijective - there exists a one-to-one mapping of input and output.

> In software implementations, the S-Box is usually realized as a lookup table.

ShiftRows
---

$$\begin{array}{ccccl}
   b_0    & b_4    & b_8    & b_{12} & \gets \text{no shift} \\
   b_5    & b_9    & b_{13} & b_1    & \gets \text{one position left shift} \\
   b_{10} & b_{14} & b_2    & b_6    & \gets \text{two positions left shift} \\
   b_{15} & b_3    & b_7    & b_{11} & \gets \text{three positions left shift}
\end{array}$$

After having applied the SubBytes step to the 16 bytes of the block, AES shifts the rows in the 4x4 array.

MixColumns
---

MixColumns multiplies each column of the state with a fixed polynomial.

$$\begin{pmatrix}
   C_0 \\
   C_1 \\
   C_2 \\
   C_3
\end{pmatrix}=
\begin{pmatrix}
   02 & 03 & 01 & 01 \\
   01 & 02 & 03 & 01 \\
   01 & 01 & 02 & 03 \\
   03 & 01 & 01 & 02
\end{pmatrix}\cdot
\begin{pmatrix}
   B_0    \\
   B_5    \\
   B_{10} \\
   B_{15}
\end{pmatrix}$$

ShiftRows and MixColumns represent the diffusion properties of AES.

AddRoundKey
---

$$C\oplus k_i$$

16-byte state matrix $C$; 16-byte subkey $k_i$, the subkeys are generated in the key schedule.

As the implies, the AddRoundKey step adds the bytes from the round key produced by the key schedule to the state of the cipher.
