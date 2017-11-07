---
title: Taylor's Theorem
category: Calculus
---

Suppose that $f: \Bbb{R}^n\to\Bbb{R}$ is continuously differentiable and that $p\in\Bbb{R}^n$. Then we have that

$$f(x+p)=f(x)+\nabla f(x+tp)^Tp,$$

for some $t\in(0,1)$. Moreover, if $f$ is twice continously differentiable, we have that,

$$\nabla f(x+p)=\nabla f(x)+\int_0^1\nabla^2f(x+tp)pdt,$$

and that

$$f(x+p)=f(x)+\nabla f(x)^T+\frac{1}{2}p^T\nabla^2f(x+tp)p,$$

for some $t\in(0,1)$.

> In numerical optimization, Necessary conditions are derived by assuming that $x^{*}$ is a local minimizer and that proving about $\nabla f(x^{*})$ and $\nabla^2f(^{*})$.

