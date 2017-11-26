---
title: AES
category: Cryptography
---

The most common block cipher in current use is Advanced Encryption Standard (AES). Contrary to DES, AES was selected through a public, peer-reviewed competition following an open call for proposals. The block size of AES is 128 bits and key sizes of 128, 192 and 265 bits.

There are no practical known against AES. Some of the development involve related-key attacks. A related-key attack involves making some predictions about how AES will behave under several different keys with some specific mathematical relation. In practice cryptographic keys are generated via a cryptographically secure pseudorandom number generator, or a similarly secure key agreement scheme or key derivation scheme.

Steps
===

AES consists of several independent steps. At a high level, AES is a substitution-permutation network.

Key schedule
---

AES requires separate keys for each round in the next steps. The key schedule is the process which AES uses to derive 128-bit keys for each round from one master key.

First, the key is separated into 4 byte columns. The key is rotated and then each byte is run through an S-box (substitution-box) that maps it to something else. Each column is then XORed with a round constant. The last step is to XOR the result with the previous round key. The other columns are the XORed with the previous round key to produce the remaining columns.

SubBytes
---

SubBytes is the S-box (substitution-box) in AES. It's 8x8 bits in size.

It works by taking the multiplicative inverse over the Galois field, and then applying an affine transformation so that there are no values $x$ so that $x\oplus S(x)=0$ or $x\oplus S(x)=\text{0xff}$. To rephrase: there are no values of $x$ that the substitution box maps to $x$ itself, or with all bits flipped. This makes the cipher resistant to linear attacks, unlike the earlier DES algorithm.

ShiftRows
---

After having applied the SubBytes step to the 16 bytes of the block, AES shifts the rows in the 4x4 array.

MixColumns
---

MixColumns multiplies each column of the state with a fixed polynomial.

ShiftRows and MixColumns represent the diffusion properties of AES.

AddRoundKey
---

As the implies, the AddRoundKey step adds the bytes from the round key produced by the key schedule to the state of the cipher.
