---
title: Feistel Cipher
category: Cryptography
---

Feistel is a symmetric structure used in the construction of block cipher. Feistel cipher is used in many, but certainly not in all, modern block ciphers.

One advantage of Feistel cipher is that encryption and decryption are almost the same operation. Decryption requires only a reversed key schedule, which is an advantage in software and hardware implementation.

Structure
===

Let $f$ be the round function and let $k_0,k_1,\ldots,k_n$ be the sub-keys for the rounds $0,1,\ldots,n$ respectively.

1. The plaintext is split into two halves $L_0$ and $R_0$.

2. For each round $i=0,1,\ldots,n$, compute $L_i=R_{i-1}$ and $R_i=L_{i-1}\oplus f(R_{i-1},k_i)$

3. Then the ciphertext is $(R_{n+1}, L_{n+1})$

Decryption of a cipher $(R_{n+1},L_{n+1})$ is accomplished by computing for $i=n,n-1,\ldots,0$, $R_i=L_{i+1}$ and $L_i=R_{i+1}\oplus f(R_{i+1},k_i)$. Then $(L_0,R_0)$ is the plaintext again.

It's crucial to note that the Feistel structure really only encrypts (decrypts) half of the input bits per each round, namely the left half of the input. The right half of is copied to the next round unchanged. In particular, the right half is not encrypted with the $f$ function.

The two basic properties of ciphers, i.e., confusion and diffusion, are realized within the $f$ function. Once the $f$ function has been designed securely, the security of a Feistel cipher increase with the number of key bits and the number of rounds.
