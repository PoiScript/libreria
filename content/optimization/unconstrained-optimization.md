---
title: Unconstrained Optimization
category: Optimization
---

First-Order Necessary Conditions
===

If $x^\ast$ is a local minimizer and $f$ is continuously differentiable in an open neighborhood of $x^\ast$, then $\nabla f(x^\ast)=0$.

Second-Order Necessary Conditions
===

If $x^\ast$ is a local minimizer of $f$ and $\nabla^2f$ exists and is continous in an open neighborhood of $x^\ast$, then $\nabla f(x^\ast)=0$ and $\nabla^2f(x^\ast)$ is positive semidefinite.

Second-Order Sufficient Conditions
===

Suppose that $\nabla^2f$ is continuous in an open neighborhood of $x^\ast$ and that $\nabla f(x^\ast)=0$ and $\nabla^2f(x^\ast)$ is positive definite. Then $x^\ast$ is a strict local minimizer of $f$.

When $f$ is convex, any local minimizer $x^\ast$ is a global minimizer of $f$. If in addition $f$ is differentiable, then any stationary point $x^\ast$ is a global minimizer of $f$.
