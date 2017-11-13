---
title: Minimizers
category: Optimization
---

There're several types of minimizers in Optimization.

Global Minimizer
===

A point $x^\ast$ is a global minimizer if $f(x^{\ast})\leq f(x)$ for all $x$, where $x$ ranges over all of $\mathbb{R}^n$ (or at least over the domain of interest to the modeler).

The global can be difficult to find, most algorithms are able to find only a local minimizer.

> An important special case is that of convex functions, for which every local minimizer is also a global minimizer.

Local Minimizer
===

A point $x^{\ast}$ is a local minimizer if there is a neighborhood $\mathcal{N}$ of $x^{\ast}$ such that $f(x^{\ast})\leq f(x)$ for all $x\in\mathcal{N}$.

> Recall that a neighborhood of $x^{\ast}$ is simply an open set that contains $x^{\ast}$.

A point that satisfies this definition is sometimes called a weak local minimizer.

A point $x^{\ast}$ is a strict local minimizer (also called a strong local minimizer) if there is a neighborhood $\mathcal{N}$ of $x^{\ast}$ such that $f(x^{\ast})<f(x)$ for all $x\in\mathcal{N}$ with $x\neq x^{\ast}$.

There's a slightly more exotic type of local minimizer, isolated local minimizer:

A point $x^{\ast}$ is an isolated local minimizer if there is a neighborhood $\mathcal{N}$ of $x^{\ast}$ such that $x^{\ast}$ is the only local minimizer in $\mathcal{N}$.

Strict local minimizers are not always isolated, all isolated local minimizers are strict.

