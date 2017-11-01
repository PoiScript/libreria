---
title: Maxwell's Equations
category: Electromagnetism
---

# Maxwell's equations in POInt form

Two of Maxwell's equations for time-verying fields,

$$\text{(1). }\nabla\times\vec{E}=-\frac{\partial\vec{B}}{\partial t}\quad\text{(2). }\nabla\times\vec{H}=\vec{J}+\frac{\partial\vec{D}}{\partial t}$$

The remining two equations for non-time-verying:

$$\text{(3). }\nabla\cdot\vec{D}=\rho_v\quad\text{(4). }\nabla\cdot\vec{B}=0$$

equation(3) states that charge density is a source (or sink) of electric flux lines.

> Note that we can no loger say that all electric flux begins and terminates on charge, because the point form of Faraday's law shows that $\vec{E}$, and here $\vec{D}$, may have circulation if a changing magnetic field is present. Thus the lines of electric flux may form closed loops. However, the coverse is still true, and every coulomb of charge must have on coulomb of electric diverging from it.

equation(4) acknowledges the fact that "magnetic charges", or poles, are not known to exist. Magnetic flux is always found in closed loops and never diverges from a point source.

The four equations form the basis of all electromagnetic theory. Thery parial differential equations and relate the electric and magnetic fields to each other and to their sources, charge and current density.

# Auxiliary Equations

The auxiliary equationis relating $\vec{D}$ and $\vec{E}$, relating $\vec{B}$ and $\vec{H}$:

$$\vec{D}=\epsilon\vec{E}\quad\vec{B}=\mu\vec{H}$$

Also, they defining conduction current density and convection current density in terms of the volume charge density $\rho_v$:

$$\vec{J}=\rho\vec{E}\quad\vec{J}=\rho_v\vec{v}$$

> The potentials $V$ and $\vec{A}$ have not been included because they are not strictly necessary, altough they are useful.

If we don't have "nice" materials to work with, then we should change the relationships to involve the polarization and magnetization field,

$$\vec{D}=\epsilon_0\vec{E}+\vec{P}\quad\vec{B}=\mu_0(\vec{H}+\vec{M})$$

For linear materials, we may relate $\vec{P}$ to $\vec{E}$ and $\vec{M}$ to $\vec{H}$:

$$\vec{P}=\chi_e\epsilon_0\vec{E}\quad\vec{M}\chi_m\vec{H}$$

Finally, because of its fundamental importance we should include the Lorentz force equation, written in point form as the force per unit volume:

$$\vec{f}=\rho_v(\vec{E}+\vec{v}\times\vec{B})$$

# Maxwell's equations in integral form

The integral forms of Maxwell's equantions are usually easier to recognize terms of the experimental laws. A differential equation always represents to a theory.

## Faraday's law

$$\oint\vec{E}\cdot d\vec{L}=-\int_S\frac{\partial\vec{B}}{\partial t}\cdot d\vec{S}$$

## Ampere's circuital law

$$\oint\vec{H}\cdot d\vec{L}=I+\int_S\frac{\partial\vec{D}}{\partial t}\cdot d\vec{S}$$

## Gauss's laws for the electric and magnetic fields

$$\oint_S\vec{D}\cdot d\vec{S}=\int_{\text{vol}}\rho_v dv$$

$$\oint_S\vec{B}\cdot d\vec{S}=0$$
