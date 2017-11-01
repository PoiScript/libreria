---
title: 'Vector'
category: 'Linear Algebra'
---

A vector quantity has both magnitude and a direction in space.

Coplanar vector are vectors lying a common plane.

# Vector Alegra

The vector addition obeys the commutative law and the associative law.

Mulitiplicatin of a vector by scalars also obyes the associative and distributive lays. Two vector are said to be equal if thier difference is zero.

# Direction Cosine

$$\vec{a_r}=\frac{\vec{r}}{r}=\frac{\vec{a_x}r\cos\alpha+\vec{a_y}r\cos\beta+\vec{a_z}r\cos\gamma}{r}=\vec{a_x}\cos\alpha+\vec{a_y}\cos\beta+\vec{a_z}\cos\gamma$$

# Dot Product

The dot, or scalar, product is a scalar, as one of the names implies, and it obeys the commutative law.

One of the most important applications of the dot product is that of finding the compoent of a vector in a given direction.

> An example of using dot product in mechanics: a constant force $\vec{F}$ applied over a straight displacement $\vec{L}$ does an amount of work $\vec{F}\vec{L}\cos\theta$, which is more easily written $\vec{F}\cdot\vec{L}$.

> Another example in magnetic fields: the total flux $\Psi$ crossing a surface of area $\vec{S}$ is given by $\vec{B}\vec{S}$ if the magnetic flux density $\vec{B}$ is prependicular to the surface and uniform over it.

$$\vec{A}\cdot\vec{B}=|\vec{A}||\vec{B}|\cos\theta$$

$$\vec{A}\cdot(\vec{B}+\vec{C})=\vec{A}\cdot \vec{B}+\vec{A}\cdot\vec{C}$$

$$\begin{cases}
    \vec{a_{r}}=\vec{a_x}\cos\alpha+{a_y}\cos\beta+\vec{a_z}\cos\gamma\\
    \vec{r}=\vec{a_x}x+\vec{a_y}y+\vec{a_z}z
\end{cases}$$

# Cross Product

The direction of $\vec{A}\times\vec{B}$ is perpendicular to the plane containing $\vec{A}$ and $\vec{B}$ and is along one of the two possiable perpendicular which is in the direction of a right-handed screw as $\vec{A}$ is turned into $\vec{B}$.

$$\vec{A}\times\vec{B}=|\vec{A}||\vec{B}|\sin\theta$$

# Triple Product

## Scalar Triple Product

$$\vec{C}\cdot\vec{A}\times\vec{B}=ABC\sin\theta\cos\varphi$$

## Vector Triple Product

$$\vec{C}\cdot(\vec{A}\times\vec{B})=\vec{B}\cdot(\vec{C}\times\vec{A})\vec{A}\cdot(\vec{B}\times\vec{C})$$

$$\vec{A}\times(\vec{B}\times\vec{C})=\vec{B}(\vec{A}\cdot\vec{C})-\vec{C}(\vec{A}\cdot \vec{B})$$

# Cartesian Coordinate System

$$\vec{a_x}\cdot\vec{a_{x}}=\vec{a_y}\cdot\vec{a_{y}}=\vec{a_z}\cdot\vec{a_{z}}=1$$

$$\vec{a_x}\cdot\vec{a_{y}}=\vec{a_y}\cdot\vec{a_{z}}=\vec{a_z}\cdot\vec{a_{x}}=0$$

$$\vec{a_x}\cdot\vec{a_{x}}=\vec{a_y}\cdot\vec{a_{y}}=\vec{a_z}\cdot\vec{a_{z}}=1$$

$$\begin{cases}
  \vec{a_x}\times\vec{a_y}=\vec{a_z}\\
  \vec{a_y}\times\vec{a_z}=\vec{a_x}\\
  \vec{a_z}\times\vec{a_x}=\vec{a_y}
\end{cases}$$

$$\begin{cases}
  \vec{A}=\vec{a_x}A_x+\vec{a_y}A_y+\vec{a_z}A_z\\
  \vec{B}=\vec{a_x}B_x+\vec{a_y}B_y+\vec{a_z}B_z
\end{cases}$$

$$|\vec{A}|=\sqrt{A_x^2+A_y^2+A_z^2}$$

$$\vec{A}\cdot\vec{B}=A_xB_x+A_yB_y+A_zB_z$$
$$\vec{A}\times\vec{B}=\vec{a_x}(A_yB_z-A_zB_y)+\vec{a_y}(A_zB_x-A_xB_z)+\vec{a_z}(A_xB_y-A_yB_x)=
\begin{vmatrix}
  \vec{a_x} & \vec{a_y} & \vec{a_z}\\
  A_x       & A_y       & A_z      \\
  B_x       & B_y       & B_z      \\
\end{vmatrix}$$

$$\vec{r}=\vec{a_x}x+\vec{a_y}y+\vec{a_z}z$$
$$d\vec{r}=d\vec{l}=\vec{a_x}dx+\vec{a_y}dy+\vec{a_z}dz$$
$$d\vec{S_x}=\vec{a_x}dzdy$$
$$d\vec{S_y}=\vec{a_y}dxdz$$
$$d\vec{S_z}=\vec{a_z}dxdy$$
$$d\tau=dxdydz$$

# Cylindrcal Coordinate System

$$\vec{a_{\rho}}\times\vec{a_{\rho}}=\vec{a_{\phi}}\times\vec{a_{\phi}}=\vec{a_z}\times\vec{a_z}=0$$

$$\vec{a_{\rho}}\times\vec{a_{\phi}}=\vec{a_z}$$
$$\vec{a_{\phi}}\times\vec{a_z}=\vec{a_{\rho}}$$
$$\vec{a_z}\times\vec{a_{\rho}}=\vec{a_{\phi}}$$

$$x=\rho\cos\phi$$
$$y=\rho\sin\phi$$
$$\rho=\sqrt{x^2+y^2}$$
$$\phi=\arctan\frac{y}{x}$$
$$\vec{r}=\vec{a_{\rho}}\rho+\vec{a_z}z$$
