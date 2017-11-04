---
title: Stoke's Theorem
category: calculus
---

Consider a surface of $S$, which is borken up into incremental surfaces of area of $\Delta\vec{S}$. If we apply the definition of the curl to one of these incremental surfaces, then

$$\frac{\oint\vec{H}\cdot{d\vec{L}_{\Delta\vec{S}}}}{\Delta\vec{S}}\overset{\cdot}{=}(\nabla\times\vec{H})\cdot\vec{a_N}$$

or

$$\oint\vec{H}\cdot{d\vec{L}_{\Delta\vec{S}}}\overset{\cdot}{=}(\nabla\times\vec{H})\cdot\vec{a_N}\Delta\vec{S}=(\nabla\times\vec{H})\cdot\Delta\vec{S}$$

where $\vec{a_N}$ is a unit vector in the direction of the right-hand normal to $\Delta\vec{S}$.

Now let us determine this circulation for every $\Delta\vec{S}$ comprising $\vec{S}$ and sum the results. As we evalute the colsed line integral for each $\Delta\vec{S}$, some cancellation will occur because every _interior_ wall is covered once in each direction. The only boundaries on which cancellation cannot occur form the outside boundary, the path enclosing $\vec{S}$. Therefore we have

$$\oint\vec{H}\cdot{d\vec{L}}\equiv\int_{\vec{S}}(\nabla\times\vec{H})\cdot{d\vec{S}}$$

where $d\vec{L}$ is taken only on the perimeter of $\vec{S}$.

The equation above is an identiry, holding for any vector field, and is known as **Stoke's theorem**.

Stoke's theorem relates a surface integral to a colsed line integral.
