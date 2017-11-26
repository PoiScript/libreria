---
title: Exclusive Or
category: Cryptography
---

Exclusive or, often called "XOR", is a Boolean binary operator that is true when either first input or the second input, but not both, are true.


Another way of thinking of XOR is as something called a "programmable inverter": one input bit decides whether to invert the other input bit, or to just pass it through unchanged.

In mathematics and cryptographer papers, exclusive or is generally represented by a cross in a circle: $\oplus$.

Property
===

1. XOR can be applied in any order: $a\oplus(b\oplus c)=(a\oplus b)\oplus c$.

2. You can flip the operands around: $a\oplus b=b\oplus a$.

3. Any bit XOR itself is 0: $a\oplus a=0$.

4. Any bit XOR 0 is that bit again: $a\oplus 0=a$.
