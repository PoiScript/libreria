---
title: 'Multiple Integral'
category: 'Calculus'
---

# Double Integral

## Definition

$$\iint_Df(x,y)d\,\iint_Df(x,y)dxdy=\lim_{\lambda\rightarrow0}\sum^n_{i=1}f(\xi_i,\eta_i)\delta_i$$

$\lim_{\lambda\rightarrow0}\sum^n_{i=1}f(\xi_i,\eta_i)\delta_i$ Riemann Sum

## Property

+ $\alpha$ and $\beta$ are constants:

$$\iint_D\left[\alpha f(x,y)+\beta g(x,y)\right]d\sigma=\alpha\iint_D f(x,y)d\sigma+\beta\iint_D g(x,y)d\sigma$$

+ $D=D_1+D_2$:

$$\iint_Df(x,y)d\sigma=\iint_{D_1}f(x,y)d\sigma+\iint_{D_2}f(x,y)d\sigma$$

+ $f(x,y)=1$, $\sigma$ equal to the area of $D$:

$$\sigma=\iint_D1\cdot d\sigma=\iint_D d\sigma$$

+ $f(x,y)\leq g(x,y)$:

$$\iint_Df(x,y)d\sigma\leq\iint_Dg(x,y)d\sigma$$

$$\left|\iint_Df(x,y)d\sigma\right|\leq\iint_D|f(x,y)|d\sigma$$

+ $M$ , $m$ are maximum and minimum of $f(x,y)$ in $D$, $\sigma$ is the area of $D$:

$$m\sigma\leq\iint_Df(x,y)d\sigma\leq M\sigma$$

## Calculate

##* Rectangular Coordinate

$$\iint_Df(x,y)d\sigma=\int^b_a\left[\int^{\varphi_2(x)}_{\varphi_1(x)}f(x,y)dy\right]dx=\int^b_adx\int^{\varphi_2(x)}_{\varphi_1(x)}f(x,y)dy$$

## Polar Coordinate

$$\iint_Df(x,y)dxdy=\iint_Df(\rho\cos\theta,\rho\sin\theta)\rho d\rho d\theta=\int_\alpha^\beta d\theta\int_{\varphi_1(\theta}^{\varphi_2(\theta)}f(\rho\cos\theta,\rho\sin\theta)\rho d\rho$$

including origin

$$\int_0^{2\pi}d\theta\int_0^{\varphi(theta)}f(\rho\cos\theta,\rho\sin\theta)\rho d\rho$$

# Triple Integral

## Definition

$$\iiint_\Omega f(x,y,z)dv=\iiint_\Omega f(x,y,z)dxdydz=\lim_{\lambda\rightarrow0}\sum^n_{i=1}f(\xi_i,\eta_i,\zeta_i)\delta v_i$$

## Calculate

##* Rectangular Coordinate

$$\iiint_\Omega f(x,y,z)dv=\int^b_adx\int^{y_2(x)}_{y_1(x)}dy\int^{x_2(x,y)}_{x_1(x,y)}f(x,y,z)dz$$

##* Cylindrical Coordinate

$$\iiint_\Omega f(x,y,z)dxdydz=\iiint_\Omega F(\rho,\theta,z)\rho d\rho d$$
