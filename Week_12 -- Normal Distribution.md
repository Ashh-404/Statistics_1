## -->The Normal Distribution

**Notation:** $X \sim N(\mu, \sigma^2)$ denotes a normal random variable with **mean $\mu$** and **variance $\sigma^2$** (or standard deviation $\sigma$).

**Probability Density Function (PDF):**
$$  
f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}, \quad -\infty < x < \infty  
$$

- **Domain:** All real numbers ($-\infty < x < \infty$).
- **Parameters:** Determined completely by location parameter $\mu$ and scale parameter $\sigma$.

#### Shape and Geometric Properties
- **Peak location:** Maximum density occurs at $x = \mu$, where the exponent is zero ($e^0 = 1$).
- **Peak height:**
  $$f(\mu) = \frac{1}{\sigma\sqrt{2\pi}}$$
  Halving $\sigma$ doubles peak height to keep total area equal to 1.
- **Asymptotic tails:** Approaches the horizontal axis as $x \to \pm\infty$, never touching zero.
- **Spread:** Larger $\sigma$ flattens and widens the curve; smaller $\sigma$ narrows and sharpens it.
- **Location:** Changing $\mu$ shifts the curve horizontally without altering shape.
- **Symmetry:** Perfectly symmetric about $x = \mu$:
  $$P(X \le \mu) = P(X \ge \mu) = 0.5$$

---

## -->The Empirical Rule (68–95–99.7 Rule)

For any normal distribution:
$$  
\begin{aligned}  
P(\mu - \sigma \le X \le \mu + \sigma) &\approx 0.68 \quad (68\% \text{ within } 1\sigma) \\  
P(\mu - 2\sigma \le X \le \mu + 2\sigma) &\approx 0.95 \quad (95\% \text{ within } 2\sigma) \\  
P(\mu - 3\sigma \le X \le \mu + 3\sigma) &\approx 0.997 \quad (99.7\% \text{ within } 3\sigma)  
\end{aligned}  
$$

#### Symmetric Segment Breakdown
- **Within $1\sigma$ from mean:** $P(\mu \le X \le \mu + \sigma) = P(\mu - \sigma \le X \le \mu) = \frac{0.68}{2} = 0.34$ ($34\%$)
- **Within $2\sigma$ from mean:** $P(\mu \le X \le \mu + 2\sigma) = P(\mu - 2\sigma \le X \le \mu) = \frac{0.95}{2} = 0.475$ ($47.5\%$)
- **Within $3\sigma$ from mean:** $P(\mu \le X \le \mu + 3\sigma) = P(\mu - 3\sigma \le X \le \mu) = \frac{0.997}{2} = 0.4985$ ($49.85\%$)

#### Band Intervals
- **Between $1\sigma$ and $2\sigma$:** $0.475 - 0.34 = 0.135$ ($13.5\%$) per side.
- **Between $2\sigma$ and $3\sigma$:** $0.4985 - 0.475 \approx 0.0235$ ($2.35\%$) per side.
- **Beyond $3\sigma$ (outer tails):** $\frac{1 - 0.997}{2} = 0.0015$ ($0.15\%$) per tail.

```
  0.15% |  2.35%  |  13.5%  |   34%   |   34%   |  13.5%  |  2.35%  | 0.15%
--------+---------+---------+---------+---------+---------+---------+--------
      μ-3σ      μ-2σ       μ-σ        μ        μ+σ       μ+2σ      μ+3σ
```

---

## -->Standard Normal Distribution ($Z$)

A normal distribution with **$\mu = 0$** and **$\sigma = 1$**:
$$Z \sim N(0, 1)$$

#### Fundamental Symmetry & Interval Identities
1. **Symmetry Across Origin:**
   $$P(Z < -x) = P(Z > x) = 1 - P(Z < x)$$
2. **Interval Probability:**
   $$P(a < Z < b) = P(Z < b) - P(Z < a)$$
3. **Outer Two Tails:**
   $$P(|Z| > a) = 2[1 - P(Z < a)]$$
4. **Central Symmetric Band:**
   $$P(|Z| < a) = 2P(Z < a) - 1$$

---

## -->Standardizing a General Normal Variable

Convert any $X \sim N(\mu, \sigma^2)$ into standard form via:
$$Z = \frac{X - \mu}{\sigma}$$

- $E(Z) = \frac{E(X) - \mu}{\sigma} = \frac{\mu - \mu}{\sigma} = 0$
- $\text{Var}(Z) = \frac{1}{\sigma^2}\text{Var}(X) = \frac{\sigma^2}{\sigma^2} = 1$

#### Master Transformation Rule
$$P(X \le a) = P\left(Z \le \frac{a - \mu}{\sigma}\right)$$

#### General Modulus Mapping
$$P(|X - \mu| > a\sigma) = P(|Z| > a)$$

---

## -->Additive Property of Normal Distributions

If $X \sim N(\mu_X, \sigma_X^2)$ and $Y \sim N(\mu_Y, \sigma_Y^2)$ are **independent**:
$$X + Y \sim N(\mu_X + \mu_Y, \; \sigma_X^2 + \sigma_Y^2)$$

- Means add: $\mu_{X+Y} = \mu_X + \mu_Y$
- Variances add: $\sigma_{X+Y}^2 = \sigma_X^2 + \sigma_Y^2$
- Standard deviation of sum: $\sigma_{X+Y} = \sqrt{\sigma_X^2 + \sigma_Y^2} \ne \sigma_X + \sigma_Y$

---

## -->Percentiles and Critical Values ($z_\alpha$)

**Definition:** $z_\alpha$ is the value cutting off area $\alpha$ in the **right tail**:
$$P(Z > z_\alpha) = \alpha \iff P(Z \le z_\alpha) = 1 - \alpha$$
$z_\alpha$ corresponds to the $100(1 - \alpha)$th percentile.

#### Standard Reference Values
| $\alpha$ (Right Tail) | Percentile ($1 - \alpha$) | $z_\alpha$ |
| :--- | :--- | :--- |
| $0.10$ | $90\text{th}$ | $1.28$ |
| $0.05$ | $95\text{th}$ | $1.645$ |
| $0.025$ | $97.5\text{th}$ | $1.96$ |
| $0.01$ | $99\text{th}$ | $2.33$ |
| $0.005$ | $99.5\text{th}$ | $2.58$ |

#### Cutoff Value for General $X \sim N(\mu, \sigma^2)$
$$a = \mu + z_\alpha \sigma$$

---

## -->Practice Problems & Worked Applications

##### P1. Empirical Rule Calculations
Heights follow $X \sim N(\mu = 69, \sigma = 6.5)$ inches. Find $P(X < 82)$.
- $82 = 69 + 2(6.5) = \mu + 2\sigma$.
- $P(X > \mu + 2\sigma) = \frac{1 - 0.95}{2} = 0.025$.
- $P(X < 82) = 1 - 0.025 = \mathbf{0.975}$.

---

##### P2. Solving Unknown Parameters
1. **Find $\mu$:** $X \sim N(\mu, \sigma = 3)$ and $P(7 \le X \le 19) = 0.95$.
   - Interval is $\mu \pm 2\sigma$.
   - $\mu - 2(3) = 7 \implies \mu - 6 = 7 \implies \mathbf{\mu = 13}$.
2. **Find $\sigma$:** $X \sim N(\mu = 100, \sigma^2)$ and $P(X > 130) = 0.025$.
   - $130 = \mu + 2\sigma \implies 100 + 2\sigma = 130 \implies 2\sigma = 30 \implies \mathbf{\sigma = 15}$.

---

##### P3. Z-Table Lookups and Inverse Values
1. $P(Z > 1.1) = 1 - P(Z < 1.1) = 1 - 0.8643 = \mathbf{0.1357}$.
2. $P(0.9 < Z < 1.2) = P(Z < 1.2) - P(Z < 0.9) = 0.8849 - 0.8159 = \mathbf{0.0690}$.
3. $P(Z < -0.72) = 1 - P(Z < 0.72) = 1 - 0.7642 = \mathbf{0.2358}$.
4. $P(|Z| < 1.64) = 2P(Z < 1.64) - 1 = 2(0.9495) - 1 = \mathbf{0.8990}$.
5. $P(|Z| > 1.2) = 2[1 - P(Z < 1.2)] = 2[1 - 0.8849] = \mathbf{0.2302}$.
6. **Inverse:** $P(|Z| < z) = 0.75 \implies 2P(Z < z) - 1 = 0.75 \implies P(Z < z) = 0.875 \implies \mathbf{z \approx 1.15}$.

---

##### P4. Standardization Scenarios
1. **IQ Distribution:** $X \sim N(140, 10^2)$.
   $$P(120 < X < 150) = P\left(\frac{120-140}{10} < Z < \frac{150-140}{10}\right) = P(-2 < Z < 1)$$
   $$= P(Z < 1) - [1 - P(Z < 2)] = 0.8413 - (1 - 0.9772) = \mathbf{0.8185}$$
2. **Standardization Comparison:**
   - Candidate A: Score $82$ on test with $\mu = 75, \sigma = 5 \implies Z_A = \frac{82 - 75}{5} = \mathbf{1.40}$.
   - Candidate B: Score $88$ on test with $\mu = 80, \sigma = 8 \implies Z_B = \frac{88 - 80}{8} = \mathbf{1.00}$.
   - Candidate A performed relatively better ($1.40 > 1.00$).

---

##### P5. Reliability Decision Comparison
Target lifetime: at least $20{,}000$ miles.
- **Battery A:** $X \sim N(24, 6^2)$ (in thousands of miles)
  $$Z_A = \frac{20 - 24}{6} = -0.67 \implies P(Z > -0.67) = P(Z < 0.67) \approx \mathbf{0.7486}$$
- **Battery B:** $Y \sim N(22, 2^2)$ (in thousands of miles)
  $$Z_B = \frac{20 - 22}{2} = -1.00 \implies P(Z > -1.00) = P(Z < 1.00) \approx \mathbf{0.8413}$$
- Battery B is preferred ($84.13\% > 74.86\%$) due to smaller dispersion.

---

##### P6. Additive Distributions
Lifetimes of two independent components: $X, Y \sim N(400, 40^2)$.
Find $P(X + Y > 750)$.
- $T = X + Y \sim N(400 + 400, \; 40^2 + 40^2) = N(800, 3200)$
- $\sigma_T = \sqrt{3200} \approx 56.57$
$$P(T > 750) = P\left(Z > \frac{750 - 800}{56.57}\right) = P(Z > -0.88) = P(Z < 0.88) \approx \mathbf{0.8106}$$

---

##### P7. Percentile Cutoffs
Aptitude test scores follow $X \sim N(\mu = 100, \sigma = 14.2)$. Find the cutoff for the top 1%.
- Top 1% corresponds to $\alpha = 0.01 \implies z_{0.01} = 2.33$.
- $a = \mu + z_{0.01}\sigma = 100 + (2.33)(14.2) = 100 + 33.086 = \mathbf{133.09}$.