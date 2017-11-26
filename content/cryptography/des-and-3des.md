---
title: DES and 3DES
category: Cryptography
---

DES
===

The Data Encryption Standard (DES) is one of the oldest block ciphers that saw widespread use. It is no longer considered secure, mainly due to its tiny key size of 56 bits.

> The DES algorithm take 64 bits key input, but the remaining 8 bits are only used for parity checking and rediscarded immediately.

3DES
===

To extend the life of the DES algorithm, people came up with 3DES: a scheme where input is first encrypted, then decrypted, the encrypted again.

$$C=E_{DES}(k_1,D_{DES}(k2, E_{DES}(k3, p)))$$

The three keys could all be chosen independently (yielding 168 key bits), or $k_3=k_1$ (yielding 112 key bits), or $k_1=k_2=k_3$, which is just plain DES and intended as a backward compatibility mode for existing DES systems.
