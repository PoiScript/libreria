---
title: 'Conservative Vector Field'
category: 'Calculus'
---

# Definition

Let $F$ be a vector field on an open region $G$ in space, and suppose that for any two point $A$ and $B$ in $L$,
the line integral $\int_C\vec{F}\cdot d\vec{x}$ along a path $L$ from $A$ to $B$ is the same over all paths from $A$ to $B$.
Then the line integral is path independent in $G$, and the field $F$ is conservative on $G$.

# Condition

Let $F=P(x,y)\vec{\imath}+Q(x,y)\vec{\jmath}$ be a field on a *connected and simply connected domain* whose component function have continuous *first partial derivatives*.
Then $F$ is conservative *if and only if*

$$\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$$

# Fundamental Theorem for Line Integrals

The fundamental theorem for line integrals also called *the gradient theorem*:

Let $L$ be a smooth curve given by $\vec{r},a\leq t\leq b$, and suppose that $f$ is a function whose gradient vector, $\nabla f$, is continuous on $L$, let $\vec{F}=\nabla f$
Then the line integral $\int_L\vec{F}\cdot d\vec{r}$ is *path independent* in $G$, and

$$\int_L\vec{F}\cdot d\vec{r}=f(\vec{r}(b))-f(\vec{r}(a))$$
