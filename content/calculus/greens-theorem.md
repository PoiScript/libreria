---
title: "Green's Theorem"
category: 'Calculus'
---

Green Theorem is about the relationship between line integral(on closed paths) and double integral.

# Definition

Let $L$ be a *positively oriented*, piecewise smooth, simple, closed curve and let $D$ be the region *enclosed by the curve*.
If $P(x,y)$ and $Q(x,y)$ have *continuous first order partial derivatives* on $D$ then,

$$\iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)dxdy=\oint_LPdx+Qdy$$

Positively Oriented: if a curve is tracked out in a counter-clockwise direction.

We can also use Green Theorem to find the area $A$ of region $D$:

$$A=\iint_Ddxdy=\frac{1}{2}\oint_Lxdy-ydx$$
