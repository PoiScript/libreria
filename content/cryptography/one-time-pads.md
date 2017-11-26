---
title: One-time pads
category: Cryptography
---

XOR can be used as an encryption scheme, called a one-time pad, which consists of just that sigle operator.

This scheme is unique not only in its simplicity, but also because it has the strongest possiable scurity guarantee. If the bits are truly random (and therefore unpredictable by an attacker), and the pad is only used once, the attacker learn nothing about the plaintext when they see a ciphertext.

Attacks
===

The one-time pad security guarantee only holds if it is used correctly. First of all, the one-time pad has to consist of truly random data. Secondly, the one-time pad can only be used once (hence the name).

Not using truly random data
---

That isn't necessarily insecure: in fact, the most obvious example, a synchronous stream cipher. However, it does invalidate the "unbreakable" security property of one-time pads.

Reusing the "one-time" pad
---

The other issue is with key reuse, which is much more serious. Suppose an attacker gets two ciphertexts with the same "one-time" pad. The attacker can then XOR the two ciphertexts, which is also the XOR of the plaintexts.

The problem is that even the result of the XOR operation on two plaintexts contains quite a bit information about the plaintexts themselves.

Crib-dragging
---

A classical approach to breaking multi-time pad systems involves "crib-dragging", a process that uses small sequences that are expected to occur with high probability. Those sequences are call "cribs".

The idea is fairly simple. Suppose we have serveral encrypted messages $C_i$ encrypted with the same "one-time" pad $K$. If we could correctly guess the plaintext for one of the messages, let's say $C_j$, we'd know $K$: $C_j\oplus P_j=K$.

Since we usually can't guess an entire message, this doesn't actually work. However, we might be able to guess parts of a message.

If we guess a few plaintext bits $p_i$ correctly for any of the messages, that would reveal the key bits at the position for all of the messages, since $k=c_i\oplus p_i$. Hence, all of the plaintext bits at the position are revealed.

Remaining Problems
===

One-tiem pads are rarely used, because they are horribly impractical: the key is at least as large as all information you'd like to transmit, put together. Plus, you'd have to exchange those keys securely, ahead of time, with all people you'd like to communicate with.

One-time pads pose a trad-off. It's an algorithm with a solid information-theoretic security guarantee, which you can not get from any other system. However, secure symmetric encryption algorithms aren't the pain point of modern cryptosystems. Cryptographers have designed plenty of those, while practial key management remains one of the toughest challenges facing modern cryptography. One-time pads may solve a problem, but it's the wrong problem.
