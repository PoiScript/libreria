---
title: Lenz's Law
category: Electromagnetism
---

A time-varying magnetic field produces an electromotive force (emf) that may establish a current in a suitable closed circuit.

The emf is defined as

$$\text{emf}=\oint\vec{E}\cdot{d\vec{L}}=-\frac{d}{dt}\int_S\vec{B}\cdot\vec{S}$$

and note that is the voltage about a specific closed path.

The figers of our right hand indicate the direction of the colsed path, and out thumb indicates the direction of $d\vec{S}$. A flux density $\vec{B}$ in the direction of $d\vec{S}$ and increasing with time thus produces an average value of $\vec{E}$ which is **opposite** to the postitive direction about the closed path.

Considering a stationary path, the magnetic flux is the only time-varying quantity on the right sid of equation and a partial derivative may be taken under the intergral sign:

$$\text{emf}=\oint\vec{E}\cdot{d\vec{L}}=-\int_S\frac{\partial\vec{B}}{\partial{t}}\cdot{d\vec{S}}
$$

applying the Stokes' theorem to the closed line intergral, we have

$$\int_S(\nabla\times\vec{E})\cdot{d\vec{S}}=-\int_S\frac{\partial\vec{B}}{\partial{t}}\cdot{d\vec{S}}$$

where the surface integrals may be taken over identcal surfaces. The surfaces are perfectly general and may be chosen as differentials,

$$(\nabla\times\vec{E})=-\frac{\partial\vec{B}}{\partial t}$$

This is one of Maxwell's four equations as written in differential, or point, form.

If $\vec{B}$ is not a function of time, the equations evidently reduce to the electrostatic equantions:

$$\oint\vec{E}\cdot d\vec{L}=0\,\text{and}\,\nabla\times\vec{E}=0$$
