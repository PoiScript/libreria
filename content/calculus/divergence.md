---
title: 'Divergence'
category: 'Calculus'
---

In vector calculus, divergence is a vector operator that produces a scalar field giving the quantity of a vector field's source at each point. More technically, the divergence represents the volume density of the outward flux of a vector field from an infinitesimal volume around a given point.

$$\text{div}\vec{A}=\int\limits_{\Delta\tau\rightarrow0}\frac{\oint_S\vec{A}(r)\cdot d\vec{S}}{\Delta\tau}$$

div stands for divergence, divergence is a scalar.

Divergence merely tells us how much flux is leaving a small volume on a pre-unit-volume; no direction is associated with it.

> In electromagnetism, a postiive divergence for any vector quanity indicates a source of the vecotr quanity at that point. Similarly, a negative divergence indicates a sink.

$$\text{div}A=\nabla\cdot\vec{A}$$

$$\nabla\cdot\vec{A}=\left[\frac{1}{h_1h_2h_3}\frac{\partial(h_2h_3A_1)}{\partial u_1}+\frac{\partial(h_1h_3A_2)}{\partial u_2}+\frac{\partial(h_1h_2A_3)}{\partial u_3}\right]$$

Rectangular:

$$\nabla\cdot\vec{A}=\frac{\partial A_x}{\partial x}+\frac{\partial A_y}{\partial y}+\frac{\partial A_z}{\partial z}$$

Cylindrical:

$$\nabla\cdot\vec{A}=\frac{1}{\rho}\frac{\partial(\rho A_\rho)}{\partial x}+\frac{1}{\rho}\frac{\partial A_\varphi}{\partial\varphi}+\frac{\partial A_z}{\partial z}$$

Spherical:

$$\nabla\cdot\vec{A}=\frac{1}{r^2}\frac{\partial(r^2A_r)}{\partial r}+\frac{1}{r\sin\theta}\frac{\partial(\sin\theta\cdot A_\theta)}{\partial\theta}+\frac{1}{r\sin\theta}\frac{\partial A_\varphi}{\partial\varphi}$$
