---
title: Block ciphers
category: Cryptography
---

A block cipher is an algorithm that allows us to encrypt blocks of a fixed length.

The plaintext and ciphertext blocks are sequences of bits. They are always the same size as one another, and that size is fixed by the block cipher: it's called the block cipher's block size. The set of all possible keys is called the keyspace.

Block ciphers are an example of a symmetric-key encryption scheme, also known as a secret-key encryption scheme. This means that the same secret key is used for both encryption and decryption.

A block cipher is a keyed permutation. It's a permutation, because the block cipher maps every possible block to some other block. It's also a keyed permutation, because the key determiners exactly which blocks map to which.

Knowing a bunch of (input, output) pairs of a given key shouldn't give you any information about any other (input, output) pairs under that key.

However, there're still some problems of using block ciphers: for example, we can only send message of a very limited length: the block length of the block cipher. We can address this with stream cipher. Also, we still need to address the issue of agreeing on those few key bytes, potentially over an insecure channel, we will address this problem with a key exchange protocol.
