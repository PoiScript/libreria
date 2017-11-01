---
title: Displacement Current
category: Electromagnetism
---

The point form of Ampere's circuital law as it applies to steady magnetic fields,

$$\nabla\times\vec{H}=\vec{J}$$

and show its inadequacy for time-varying conditions by taking the divergence of each side,

$$\nabla\cdot\nabla\times\vec{H}=0=\nabla\cdot\vec{J}$$

However, the equation of continuity:

$$\nabla\cdot\vec{J}=-\frac{\partial\rho_v}{\partial t}$$

Suppose we add an unknown term $\vec{G}$ to

$$\nabla\times\vec{H}=\vec{J}+\vec{G}$$

taking the divergence, we have

$$0=\nabla\cdot\vec{J}+\nabla\cdot\vec{G}$$

thus

$$\nabla\cdot\vec{G}=\frac{\partial\rho_v}{\partial t}$$

replacing $\rho_v$ with $\nabla\cdot\vec{D}$,

$$\nabla\cdot\vec{G}=\frac{\partial}{\partial t}(\nabla\cdot\vec{D})=\nabla\cdot\frac{\partial\vec{D}}{\partial t}$$

from which we obtain the simplest solution for $\vec{G}$:

$$\vec{G}=\frac{\partial \vec{D}}{\partial t}$$

Because it results from a time-varying electric flux density (or displacement density), Maxwell termed it a displacement current density. We sometiems denote it by $\vec{J_d}$:

$$\nabla\times=\vec{J}+\vec{J_d}$$
