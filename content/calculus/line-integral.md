---
title: 'Line Integral'
category: 'Calculus'
---

# First Kind

## Definition

The *line integral* of $f$ along $L$:

$$\int_Lf(x,y)ds=\lim_{\lambda\rightarrow0}f(\xi_i,\eta_i)\delta s_i$$

The curve $L$ should be *smooth* ($\vec{r}(t)$ is continuous and $\vec{r}\neq0$ for all $t$)

## Calculate

To compute a line integral, you should convert everything to a parametric equations:

$$x=\varphi(t),\,y=\psi(t),\,\alpha\leq t\leq\beta$$

$$\int_Lf(x,y)ds=\int^\beta_\alpha f\left[\phi(t)+\psi(t)\right]\sqrt{\phi'^2(t)+\psi'^2(t)dt}dt(\alpha<\beta)$$

# Second Kind

## Definition

The *line integral* of $f$ with respect to $x$:

$$\int_Lf(x,y)dx=\int^\alpha_\beta f\left(x(t),y(t)\right)x'(t)dt$$

The *line integral* of $f$ with respect to $y$:

$$\int_Lf(x,y)dy=\int^\alpha_\beta f\left(x(t,y(t)\right)y'(t)dt$$

These two line integral often show together:

$$\int_LP(x,y)dx+\int_LQ(x,y)dy=\int_LPdx+Qdy$$

Or write the parameterization of the curve as a vector function:

$$\int_L\vec{F}(x,y)\cdot d\vec{r}$$

$$\vec{F}(x,y)=P(x,y)\vec{i}+Q(x,y)\vec{j}\,d\vec{r}=dx\vec{i}+dy\vec{j}$$

## Property

If $L$ is any curve:

$$\int_{L^-}\vec{F}(x,y)\cdot d\vec{r}=-\int_L\vec{F}(x,y)\cdot d\vec{r}$$

## Calculate

$$x=\varphi(t),\,y=\psi(t)$$

$$\int_LP(x,y)dx+Q(x,y)dy=\int_\beta^\alpha\left\{P\left[\varphi(t),\psi(t)\right]\varphi'(t)+Q\left[\varphi(t),\psi(t)\right]\psi'(t)\right\}dt$$

# Gradient Theorem

Fundamental Theorem of Calculus told us:

$$\int_b^aF'(x)dx=F(b)-F(a)$$

Here is the version of line integral:

$$\int_L\nabla f\cdot d\vec{v}=f\left(\vec{r}(b)\right)-f\left(\vec{r}(a)\right)$$

$$\nabla=\frac\partial{\partial x}\vec{\imath}+\frac{\partial}{\partial y}\vec{\jmath}$$

vector differential operator

$$\nabla f=\frac{\partial f}{\partial x}\vec{\imath}+\frac{\partial f}{\partial y}\vec{\jmath}$$

# Green Theorem

Green Theorem is about the relationship between line integral(on closed paths) and double integral.

Let $L$ be a *positively oriented*, piecewise smooth, simple, closed curve and let $D$ be the region *enclosed by the curve*.
If $P(x,y)$ and $Q(x,y)$ have *continuous first order partial derivatives* on $D$ then,

$$\iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)dxdy=\oint_LPdx+Qdy$$

Positively Oriented: if a curve is tracked out in a counter-clockwise direction.

We can also use Green Theorem to find the area $A$ of region $D$:

$$A=\iint_Ddxdy=\frac{1}{2}\oint_Lxdy-ydx$$
