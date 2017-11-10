---
title: Poynting's Theorem
category: Electromagnetism
---

$$-\nabla\cdot(\vec{E}\times\vec{H})=\vec{J}\cdot\vec{E}+\frac{\partial}{\partial{t}}(\frac{1}{2}\vec{D}\cdot\vec{E})+\frac{\partial}{\partial{t}}(\frac{1}{2}\vec{B}\cdot\vec{H})$$

integrating the equation and applying the divergence theorem:

$$-\oint_{\text{area}}(\vec{E}\times\vec{H})\cdot{d\vec{S}}=\int_{\text{vol}}\vec{J}\cdot\vec{E}dv+\frac{d}{dt}\int_{\text{vol}}\frac{1}{2}\vec{D}\cdot\vec{E}dv+\frac{d}{dt}\int_{\text{vol}}\frac{1}{2}\vec{B}\cdot\vec{H}dv$$

This equation is known as Poynting's Theorem.

On the right-hand side, the first integral is the total (but instantaneous) ohmic power dissipated whitin the volume. The second integral is the total energy stored in the electric field, and the  thrid integral is the stored energy in the magnetic field. Since time derivatives are taken of the second and third integrals, those results give the time rates of increase of energy stored within the volume, or the instantaneous power going to increase the stored energy. The sum of the expression on the right must therefore be the total power flowing into this volume, and so the total power flowing out of the volume is

$$\oint_{\text{area}}(\vec{E}\times\vec{H})\cdot{d\vec{S}}\quad W$$

where the integral is over the colsed surface surrounding the volume. The cross product $\vec{E}\times\vec{H}$ is known as the Poynting vector, $\vec{S}$,

$$\vec{S}=\vec{E}\times\vec{H}\quad{W/m^2}$$
