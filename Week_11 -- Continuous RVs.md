## -->Continuous Random Variables: Foundations

### From Counting to Measuring

- **Discrete random variables:** Quantities obtained by **counting** ($0, 1, 2, \dots$), taking isolated values on the real line with gaps in between.
- **Continuous random variables:** Quantities obtained by **measuring** (time, distance, weight, temperature), taking any value across an entire unbroken interval.

### Why $P(X = x) = 0$ for Exact Points

In any continuous interval $[a, b]$, there are uncountably infinite exact values ($5.0$, $5.0001$, $5.0000001$, etc.). If every individual point were assigned even an infinitesimally small positive probability, their sum over the interval would diverge to infinity, violating $\sum P = 1$.

> **Fundamental Principle:**
> For any continuous random variable $X$ and any single real number $c$:
> $$P(X = c) = 0$$
> Meaningful probabilities exist only for **intervals** ($a \le X \le b$), not individual exact values.

#### Equivalence of Strict and Non-Strict Inequalities
Because the probability of landing exactly on an endpoint is zero:
$$P(a \le X \le b) = P(a < X < b) = P(a \le X < b) = P(a < X \le b)$$
Including or excluding endpoints does not change the calculated probability.

---
### The Probability Density Function (PDF)

The probability density function $f(x)$ describes a continuous curve where probabilities correspond to **areas under the curve**.

$$P(a \le X \le b) = \int_a^b f(x) \, dx$$

#### Two Essential Properties of a Valid PDF
1. **Non-negativity:** $f(x) \ge 0$ for all real $x$ (the curve never dips below the horizontal axis).
2. **Total Area Equals 1:**
   $$\int_{-\infty}^{\infty} f(x) \, dx = 1$$

*Note:* $f(x)$ is a probability **density**, not a point probability. Unlike discrete PMF values, $f(x)$ can exceed $1$ as long as the total area remains $1$.

#### Example: Television Repair Time (Piecewise Constant)
Repair time $X$ is broken into 10-minute segments, each with a given area (probability):
- $0\text{--}10\text{ min}: 0.14$
- $10\text{--}20\text{ min}: 0.15$
- $20\text{--}30\text{ min}: 0.14$
- $30\text{--}40\text{ min}: 0.13$
- $40\text{--}50\text{ min}: 0.11$
- $50\text{--}60\text{ min}: 0.09$
- $60\text{--}70\text{ min}: b$ (unknown)

1. **Find missing piece $b$:**
   $$\sum \text{Area} = 0.14 + 0.15 + 0.14 + 0.13 + 0.11 + 0.09 + b = 1.0 \implies 0.76 + b = 1.0 \implies b = 0.24$$
2. **$P(X \le 20)$:**
   $$P(X \le 20) = 0.14 + 0.15 = 0.29$$
3. **$P(X \le 40)$:**
   $$P(X \le 40) = 0.14 + 0.15 + 0.14 + 0.13 = 0.56$$
4. **$P(X > 50)$ (via complement rule):**
   $$P(X \le 50) = 0.14 + 0.15 + 0.14 + 0.13 + 0.11 = 0.67$$
   $$P(X > 50) = 1 - P(X \le 50) = 1 - 0.67 = 0.33$$
5. **$P(40 \le X \le 70)$:**
   $$P(40 \le X \le 70) = 0.11 + 0.09 + 0.24 = 0.44$$

---
### Cumulative Distribution Function (CDF)

For any continuous random variable $X$, the CDF $F(a)$ accumulates the total area under $f(x)$ from $-\infty$ up to $a$:

$$F(a) = P(X \le a) = \int_{-\infty}^a f(x) \, dx$$

#### Core Properties of the Continuous CDF
1. $0 \le F(a) \le 1$ for all $a$.
2. $\lim_{a \to -\infty} F(a) = 0$ and $\lim_{a \to \infty} F(a) = 1$.
3. $F(a)$ is a **continuous, non-decreasing function** (smooth ramp, unlike the discrete step function).
4. By the Fundamental Theorem of Calculus:
   $$f(x) = \frac{d}{dx} F(x)$$

#### Computing Interval Probabilities via CDF Subtraction
$$P(c \le X \le d) = F(d) - F(c)$$
$$P(X > c) = 1 - F(c)$$

---
### Expectation and Variance

Formulas directly parallel the discrete definitions, substituting integrals for summations:

#### Expectation
$$E(X) = \mu = \int_{-\infty}^{\infty} x \cdot f(x) \, dx$$

#### Expectation of a Function $g(X)$
$$E[g(X)] = \int_{-\infty}^{\infty} g(x) \cdot f(x) \, dx$$

#### Variance and Standard Deviation
$$\text{Var}(X) = \sigma^2 = E\left[(X - \mu)^2\right] = \int_{-\infty}^{\infty} (x - \mu)^2 f(x) \, dx$$
$$\text{Var}(X) = E(X^2) - [E(X)]^2, \quad \text{where } E(X^2) = \int_{-\infty}^{\infty} x^2 f(x) \, dx$$
$$\text{SD}(X) = \sigma = \sqrt{\text{Var}(X)}$$

---
### Comparison: Discrete vs. Continuous Random Variables

| Property | Discrete | Continuous |
| :--- | :--- | :--- |
| **Values** | Countable set $\{x_1, x_2, \dots\}$ | Continuous interval $[a, b]$ |
| **Probability Function** | PMF: $P(X = x_i)$ | PDF: $f(x)$ (density; area gives probability) |
| **Exact Point Probability** | $P(X = x_i) \ge 0$ | $P(X = c) = 0$ always |
| **Total Probability** | $\sum_i P(X = x_i) = 1$ | $\int_{-\infty}^{\infty} f(x) \, dx = 1$ |
| **CDF Definition** | $F(a) = \sum_{x_i \le a} P(X = x_i)$ (step function) | $F(a) = \int_{-\infty}^a f(x) \, dx$ (continuous curve) |
| **Expectation** | $E(X) = \sum_i x_i P(X = x_i)$ | $E(X) = \int_{-\infty}^{\infty} x f(x) \, dx$ |
| **Inequality Strictness** | $P(X \le a) \ne P(X < a)$ | $P(X \le a) = P(X < a)$ |

---
## -->Continuous Uniform Distribution

A random variable is **uniformly distributed** over an interval $[a, b]$ if its probability density is constant across that entire range.

$$X \sim \text{Uniform}(a, b)$$

### PDF Derivation
Since $f(x) = k$ for $a \le x \le b$ and total area must equal $1$:
$$\int_a^b k \, dx = k(b - a) = 1 \implies k = \frac{1}{b - a}$$

$$f(x) = \begin{cases} \dfrac{1}{b - a} & a \le x \le b \\ 0 & \text{otherwise} \end{cases}$$

### The Standard Uniform Distribution
When $a = 0$ and $b = 1$:
$$f(x) = 1 \quad \text{for } 0 \le x \le 1$$
Used as the foundational engine for computational random number generation and inverse-transform sampling.

### CDF Derivation
- For $x < a$: $F(x) = 0$
- For $a \le x \le b$:
  $$F(x) = \int_a^x \frac{1}{b - a} \, dt = \left[ \frac{t}{b - a} \right]_a^x = \frac{x - a}{b - a}$$
- For $x > b$: $F(x) = 1$

$$F(x) = \begin{cases} 0 & x < a \\ \dfrac{x - a}{b - a} & a \le x \le b \\ 1 & x > b \end{cases}$$

For the standard uniform distribution $\text{Uniform}(0, 1)$, $F(x) = x$ for $x \in [0, 1]$.

### Expectation and Variance

#### Expectation
$$E(X) = \int_a^b x \cdot \frac{1}{b - a} \, dx = \frac{1}{b - a} \left[ \frac{x^2}{2} \right]_a^b = \frac{b^2 - a^2}{2(b - a)} = \frac{(b - a)(b + a)}{2(b - a)} = \frac{a + b}{2}$$
*(The expectation is the exact midpoint of the interval).*

#### Variance
$$E(X^2) = \int_a^b x^2 \cdot \frac{1}{b - a} \, dx = \frac{1}{b - a} \left[ \frac{x^3}{3} \right]_a^b = \frac{b^3 - a^3}{3(b - a)} = \frac{a^2 + ab + b^2}{3}$$
$$\text{Var}(X) = E(X^2) - [E(X)]^2 = \frac{a^2 + ab + b^2}{3} - \frac{(a + b)^2}{4} = \frac{4(a^2 + ab + b^2) - 3(a^2 + 2ab + b^2)}{12} = \frac{(b - a)^2}{12}$$

$$\text{Var}(X) = \frac{(b - a)^2}{12}, \quad \text{SD}(X) = \frac{b - a}{\sqrt{12}}$$
*(Variance depends solely on interval width $b - a$, unaffected by shifting location).*

#### Worked Example: Waiting for a Friend
A friend arrives at a random time uniformly distributed between 2:00 PM and 3:00 PM. Let $X$ be waiting time in minutes $\implies X \sim \text{Uniform}(0, 60)$.
- $f(x) = \frac{1}{60}$, \quad $F(x) = \frac{x}{60}$ for $0 \le x \le 60$.
- $P(X \ge 30) = 1 - F(30) = 1 - \frac{30}{60} = 0.50$
- $P(X < 15) = F(15) = \frac{15}{60} = 0.25$
- $P(10 \le X \le 35) = F(35) - F(10) = \frac{35 - 10}{60} = \frac{25}{60} = \frac{5}{12} \approx 0.417$
- $P(X \le 45) = F(45) = \frac{45}{60} = 0.75$

---
## -->Non-Uniform and Triangular Distributions

Probabilities under arbitrary continuous PDFs are evaluated by calculating the geometry of the area (rectangles, triangles, or trapezoids) without requiring closed-form distribution formulas.

### 1. Piecewise-Constant PDF
A random variable $X$ has PDF:
$$f(x) = \begin{cases} 0.025 & 10 \le x < 20 \\ 0.050 & 20 \le x < 30 \\ 0.025 & 30 \le x < 40 \\ 0 & \text{otherwise} \end{cases}$$

- **Area verification:**
  $$\text{Area} = (0.025 \times 10) + (0.050 \times 10) + (0.025 \times 10) = 0.25 + 0.50 + 0.25 = 1.0$$
- **$P(X > 20)$:**
  $$\text{Area from } 20 \text{ to } 40 = 0.50 + 0.25 = 0.75$$
- **$P(X \le 25)$:**
  $25$ is the midpoint of $[20, 30]$.
  $$P(X \le 25) = \text{Area}[10, 20] + \frac{1}{2}\text{Area}[20, 30] = 0.25 + 0.25 = 0.50$$
- **$P(15 \le X \le 35)$:**
  $$P(15 \le X \le 35) = \frac{1}{2}(0.25) + 0.50 + \frac{1}{2}(0.25) = 0.125 + 0.50 + 0.125 = 0.75$$
- **$P(X > 35)$:**
  $$P(X > 35) = \frac{1}{2}(0.25) = 0.125$$

### 2. Triangular Distribution
Study time $X \in [0, 4]$ hours has a symmetric triangular PDF peaking at $x = 2$.

1. **Find peak height $h$:**
   $$\text{Total Area} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times 4 \times h = 1 \implies 2h = 1 \implies h = 0.5$$
2. **$P(X > 3)$:**
   At $x = 3$, the density decreases linearly from $0.5$ at $x=2$ to $0$ at $x=4$. By linear interpolation:
   $$f(3) = 0.25$$
   The tail region $[3, 4]$ is a triangle with base $b = 1$ and height $h = 0.25$:
   $$P(X > 3) = \frac{1}{2} \times 1 \times 0.25 = 0.125$$
3. **$P(0 \le X \le 3)$:**
   $$P(X \le 3) = 1 - P(X > 3) = 1 - 0.125 = 0.875$$
4. **$P(1 \le X \le 3)$ (Tail Subtraction Technique):**
   By symmetry, the left tail $[0, 1]$ has the same area as the right tail $[3, 4]$:
   $$\text{Area}[0, 1] = \text{Area}[3, 4] = 0.125$$
   $$P(1 \le X \le 3) = 1 - \text{Area}[0, 1] - \text{Area}[3, 4] = 1 - 0.125 - 0.125 = 0.75$$

---
## -->Exponential Distribution

The **Exponential distribution** models the time between independent, memoryless Poisson events occurring at a constant average rate $\lambda$.

$$X \sim \text{Exponential}(\lambda)$$

### PDF and Support
$$f(x) = \begin{cases} \lambda e^{-\lambda x} & x \ge 0 \\ 0 & x < 0 \end{cases}$$

- Parameter $\lambda > 0$ represents the **event rate** (events per unit time).
- Larger $\lambda$ implies faster event occurrences and a steeper curve decay.

### CDF Derivation
$$F(a) = \int_0^a \lambda e^{-\lambda x} \, dx = \left[ -e^{-\lambda x} \right]_0^a = -e^{-\lambda a} - (-e^0) = 1 - e^{-\lambda a}$$

$$F(a) = \begin{cases} 1 - e^{-\lambda a} & a \ge 0 \\ 0 & a < 0 \end{cases}$$

#### Complement / Survival Function
$$P(X > a) = 1 - F(a) = e^{-\lambda a}$$

### Expectation and Variance
Using integration by parts:
$$E(X) = \int_0^\infty x \lambda e^{-\lambda x} \, dx = \frac{1}{\lambda}$$
$$\text{Var}(X) = E(X^2) - [E(X)]^2 = \frac{2}{\lambda^2} - \left(\frac{1}{\lambda}\right)^2 = \frac{1}{\lambda^2}$$
$$\text{SD}(X) = \frac{1}{\lambda}$$

*Note:* For an Exponential distribution, the mean and standard deviation are always equal: $E(X) = \text{SD}(X) = \frac{1}{\lambda}$.

#### Worked Example: Call Duration
Call duration $X$ is Exponential with $\lambda = 0.1 \implies E(X) = \frac{1}{0.1} = 10\text{ minutes}$.
1. **$P(X > 10)$:**
   $$P(X > 10) = e^{-0.1(10)} = e^{-1} \approx 0.3679$$
   *(Because the distribution is right-skewed, there is a $36.8\%$ chance of exceeding the mean, not $50\%$).*
2. **$P(10 \le X \le 20)$:**
   $$P(10 \le X \le 20) = F(20) - F(10) = (1 - e^{-2}) - (1 - e^{-1}) = e^{-1} - e^{-2} \approx 0.3679 - 0.1353 = 0.2326$$

---
## Practice Problems

##### P1. Uniform Distribution Properties
A city bus arrives uniformly at random between $0$ and $15$ minutes past the hour ($X \sim \text{Uniform}(0, 15)$).
(a) State the PDF and CDF.
(b) Find $E(X)$ and $\text{Var}(X)$.
(c) Find $P(X \le 5)$, $P(X > 10)$, and $P(4 \le X \le 12)$.
(d) Find the probability a passenger arriving on the hour waits more than $9$ minutes.

**Solution:**
(a)
$$f(x) = \frac{1}{15}, \quad F(x) = \frac{x}{15} \quad \text{for } 0 \le x \le 15$$
(b)
$$E(X) = \frac{0 + 15}{2} = 7.5 \text{ min}$$
$$\text{Var}(X) = \frac{(15 - 0)^2}{12} = \frac{225}{12} = 18.75$$
(c)
$$P(X \le 5) = F(5) = \frac{5}{15} = \frac{1}{3} \approx 0.333$$
$$P(X > 10) = 1 - F(10) = 1 - \frac{10}{15} = \frac{5}{15} = \frac{1}{3} \approx 0.333$$
$$P(4 \le X \le 12) = F(12) - F(4) = \frac{12 - 4}{15} = \frac{8}{15} \approx 0.533$$
(d)
$$P(X > 9) = 1 - F(9) = 1 - \frac{9}{15} = \frac{6}{15} = 0.40$$

---

##### P2. Piecewise-Constant Density Calculations
Call duration $X$ (in minutes) has PDF:
$$f(x) = \begin{cases} 0.04 & 0 \le x < 10 \\ 0.08 & 10 \le x < 15 \\ 0.02 & 15 \le x < 25 \\ 0 & \text{otherwise} \end{cases}$$
(a) Verify validity.
(b) Find $P(X \ge 15)$.
(c) Find $P(X \le 12)$.
(d) Find $P(8 \le X \le 20)$.

**Solution:**
(a) $\text{Total Area} = (0.04 \times 10) + (0.08 \times 5) + (0.02 \times 10) = 0.40 + 0.40 + 0.20 = 1.0$. All densities $\ge 0$. Valid.
(b)
$$P(X \ge 15) = \text{Area}[15, 25] = 0.02 \times 10 = 0.20$$
(c) $12$ lies within $[10, 15]$. Area from $10$ to $12 = 0.08 \times (12 - 10) = 0.16$.
$$P(X \le 12) = \text{Area}[0, 10] + \text{Area}[10, 12] = 0.40 + 0.16 = 0.56$$
(d)
$$\text{Area}[8, 10] = 0.04 \times (10 - 8) = 0.08$$
$$\text{Area}[10, 15] = 0.40$$
$$\text{Area}[15, 20] = 0.02 \times (20 - 15) = 0.10$$
$$P(8 \le X \le 20) = 0.08 + 0.40 + 0.10 = 0.58$$

---

##### P3. Symmetric Triangular Distribution
Repair time $X$ has a symmetric triangular distribution over $[0, 8]$ peaking at $x = 4$.
(a) Find peak height $h$.
(b) Find $P(X > 6)$.
(c) Find $P(2 \le X \le 6)$ using tail subtraction.
(d) Find $P(X \le 4)$.

**Solution:**
(a)
$$\text{Area} = \frac{1}{2} \times 8 \times h = 1 \implies 4h = 1 \implies h = 0.25$$
(b) At $x = 6$, density drops linearly: $f(6) = 0.25 \times \frac{8 - 6}{8 - 4} = 0.25 \times \frac{2}{4} = 0.125$.
$$P(X > 6) = \frac{1}{2} \times (8 - 6) \times f(6) = \frac{1}{2} \times 2 \times 0.125 = 0.125$$
(c) By symmetry, $\text{Area}[0, 2] = \text{Area}[6, 8] = 0.125$.
$$P(2 \le X \le 6) = 1 - \text{Area}[0, 2] - \text{Area}[6, 8] = 1 - 0.125 - 0.125 = 0.75$$
(d) By symmetry around the median $x = 4$:
$$P(X \le 4) = 0.50$$

---

##### P4. Exponential Distribution Workup
Time between machine breakdowns (in days) is Exponential with mean $E(X) = 20\text{ days}$.
(a) Find $\lambda$, PDF, and CDF.
(b) Find $\text{Var}(X)$ and $\text{SD}(X)$.
(c) Find $P(X > 25)$.
(d) Find $P(10 \le X \le 30)$.
(e) Find $P(X \le 5)$.

**Solution:**
(a)
$$\lambda = \frac{1}{E(X)} = \frac{1}{20} = 0.05$$
$$f(x) = 0.05 e^{-0.05x}, \quad F(x) = 1 - e^{-0.05x} \quad (x \ge 0)$$
(b)
$$\text{Var}(X) = \frac{1}{\lambda^2} = \frac{1}{0.05^2} = 400$$
$$\text{SD}(X) = \frac{1}{\lambda} = 20$$
(c)
$$P(X > 25) = e^{-0.05(25)} = e^{-1.25} \approx 0.2865$$
(d)
$$P(10 \le X \le 30) = F(30) - F(10) = e^{-0.05(10)} - e^{-0.05(30)} = e^{-0.5} - e^{-1.5} \approx 0.6065 - 0.2231 = 0.3834$$
(e)
$$P(X \le 5) = 1 - e^{-0.05(5)} = 1 - e^{-0.25} \approx 1 - 0.7788 = 0.2212$$

---

##### P5. Model Comparison: Uniform vs. Exponential
A response time has two proposed models:
- **Model A:** $X \sim \text{Uniform}(0, 20)$
- **Model B:** $X \sim \text{Exponential}(\lambda = 0.1) \implies \text{mean } = 10$

Find $E(X)$, $\text{Var}(X)$, and $P(X > 12)$ under both models.

**Solution:**
- **Model A (Uniform):**
  $$E(X) = \frac{0 + 20}{2} = 10$$
  $$\text{Var}(X) = \frac{(20 - 0)^2}{12} = \frac{400}{12} \approx 33.33$$
  $$P(X > 12) = 1 - F(12) = 1 - \frac{12}{20} = 1 - 0.60 = 0.40$$

- **Model B (Exponential):**
  $$E(X) = \frac{1}{0.1} = 10$$
  $$\text{Var}(X) = \frac{1}{0.1^2} = 100$$
  $$P(X > 12) = e^{-0.1(12)} = e^{-1.2} \approx 0.3012$$

**Comparison:** Even though both models share the exact same mean ($10$), the Exponential distribution has three times the variance ($100$ vs. $33.33$) due to its unbounded positive tail, resulting in a lower probability of exceeding $12$ compared to the flat Uniform distribution.