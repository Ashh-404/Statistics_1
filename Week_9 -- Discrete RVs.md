### -->Real-World Application: PMF and Distribution Shape

Consider an experiment recording the number of credit cards owned by adults in a population.
Since the count is discrete, let $X \in \{0, 1, 2, 3, 4\}$.

| $x$ | $P(X=x)$ |
| :--- | :--- |
| 0 | 0.42 |
| 1 | 0.36 |
| 2 | 0.14 |
| 3 | 0.06 |
| 4 | 0.02 |

- **Validity check:**
  $$\sum P(X=x) = 0.42 + 0.36 + 0.14 + 0.06 + 0.02 = 1.00 \quad \text{and} \quad P(X=x) \ge 0$$
- **Distribution Shape:** Positively skewed (right-skewed). The highest probability mass clusters at $X=0$, with a thinning tail extending toward larger values. Most individuals hold 0 or 1 card; owning many cards is progressively rarer.

##### Analyzing Sample Data
- **Comparing events:** Is an adult more likely to have no credit cards ($X=0$) or at least two ($X \ge 2$)?
  $$P(X=0) = 0.42$$
  $$P(X \ge 2) = P(X=2) + P(X=3) + P(X=4) = 0.14 + 0.06 + 0.02 = 0.22$$
  Since $0.42 > 0.22$, owning 0 cards is nearly twice as likely as owning 2 or more.
- **Expected count in a sample:** If sampling $n = 500$ people:
  - Expected individuals with 0 cards: $500 \times 0.42 = 210$. Finding zero non-cardholders in a sample of 500 would severely contradict the model.
  - Expected individuals with exactly 2 cards: $500 \times 0.14 = 70$. An observation of 72 people aligns closely with theoretical expectations.

---
### -->Expectation

The **expectation** (or **expected value**) of a discrete random variable $X$ represents the theoretical long-run average outcome over repeated independent trials. It acts as the center of mass or "balance point" of the probability mass function.

> **Definition:**
> For a discrete random variable $X$ taking values $x_i$ with probabilities $P(X=x_i)$:
> $$E(X) = \mu = \sum_i x_i \cdot P(X=x_i)$$

*Note:* $E(X)$ is a long-run summary metric; it does not have to be an achievable outcome on any single trial.

#### Intuition: Die Gambling Game
Roll a fair 6-sided die:
- Odd roll ($1, 3, 5$): Win that face value in ₹.
- Even roll ($2, 4, 6$): Lose that face value in ₹.

Theoretical expected payoff:
$$E(\text{Payoff}) = 1\left(\frac{1}{6}\right) - 2\left(\frac{1}{6}\right) + 3\left(\frac{1}{6}\right) - 4\left(\frac{1}{6}\right) + 5\left(\frac{1}{6}\right) - 6\left(\frac{1}{6}\right) = -\frac{3}{6} = -0.5$$
In the long run, the player loses an average of ₹0.50 per roll.

#### Fundamental Examples

1. **Single Fair 6-Sided Die:**
   $$E(X) = 1\left(\frac{1}{6}\right) + 2\left(\frac{1}{6}\right) + \dots + 6\left(\frac{1}{6}\right) = \frac{21}{6} = 3.5$$
   (3.5 is the balance point, even though no single roll produces 3.5).

2. **Sum of Two Fair Dice:**
   $$E(X) = 2\left(\frac{1}{36}\right) + 3\left(\frac{2}{36}\right) + \dots + 7\left(\frac{6}{36}\right) + \dots + 12\left(\frac{1}{36}\right) = 7$$

3. **Number of Heads in 3 Independent Coin Tosses:**
   $$E(X) = 0\left(\frac{1}{8}\right) + 1\left(\frac{3}{8}\right) + 2\left(\frac{3}{8}\right) + 3\left(\frac{1}{8}\right) = \frac{12}{8} = 1.5$$

#### Special Discrete Distributions

- **Bernoulli Random Variable:**
  $X \in \{0, 1\}$ with $P(X=1) = p$ and $P(X=0) = 1-p$.
  $$E(X) = 0(1-p) + 1(p) = p$$

- **Discrete Uniform Random Variable:**
  $X \in \{1, 2, \dots, n\}$, each with $P(X=i) = \frac{1}{n}$.
  $$E(X) = \sum_{i=1}^n i \left(\frac{1}{n}\right) = \frac{1}{n} \cdot \frac{n(n+1)}{2} = \frac{n+1}{2}$$

- **Hypergeometric Distribution (Expectation):**
  Drawing a sample of size $n$ without replacement from a population of $N$ items containing $M$ items of interest:
  $$E(X) = n \cdot \frac{M}{N}$$

---
### -->Expectation of Functions and Linearity

For any real-valued function $g(X)$:
$$E[g(X)] = \sum_i g(x_i) \cdot P(X=x_i)$$

#### Linear Transformation Properties
1. **Scaling:** $E(aX) = a E(X)$
2. **Shift and Scale:** $E(aX + b) = a E(X) + b$

**Application:**
Anita's Diwali bonus $X$ has $E(X) = \text{₹}15{,}000$.
- If Sanjay receives $Y = 0.9X$:
  $$E(Y) = 0.9 \times 15{,}000 = \text{₹}13{,}500$$
- If Sanjay receives $Y = X + 1000$:
  $$E(Y) = 15{,}000 + 1{,}000 = \text{₹}16{,}000$$

#### Non-Linearity Warning: $E(X^2) \ne [E(X)]^2$
Squaring is non-linear; the exponent cannot simply be pulled outside.

**Counterexample:** Let $X \in \{-1, 0, 1\}$ with probabilities $0.2, 0.5, 0.3$.
$$E(X) = (-1)(0.2) + 0(0.5) + 1(0.3) = 0.1 \implies [E(X)]^2 = (0.1)^2 = 0.01$$
$$E(X^2) = (-1)^2(0.2) + (0)^2(0.5) + (1)^2(0.3) = 1(0.2) + 0 + 1(0.3) = 0.5$$
Notice $0.5 \ne 0.01$.

#### Additive Linearity: Sum of Random Variables
Expectation is additive across any set of random variables, regardless of whether they are independent:
$$E(X + Y) = E(X) + E(Y)$$
$$E\left(\sum_{i=1}^k X_i\right) = \sum_{i=1}^k E(X_i)$$

- **Two Dice Sum:** $E(X+Y) = \frac{7}{2} + \frac{7}{2} = 7$
- **3 Coin Tosses:** $X = X_1 + X_2 + X_3$ where each $X_i \sim \text{Bernoulli}(0.5)$:
  $$E(X) = 0.5 + 0.5 + 0.5 = 1.5$$

---
### -->Variance and Standard Deviation

Expectation measures central tendency, but fails to indicate spread. Two variables can have identical expectations with entirely different risk/variability profiles.

> **Definition:**
> The variance $\sigma^2 = \text{Var}(X)$ is the expected squared deviation from the mean:
> $$\text{Var}(X) = E\left[(X - \mu)^2\right] = \sum_i (x_i - \mu)^2 P(X=x_i)$$

#### Computational Shortcut Formula
$$\text{Var}(X) = E\left[X^2 - 2\mu X + \mu^2\right] = E(X^2) - 2\mu E(X) + \mu^2$$
$$\text{Var}(X) = E(X^2) - [E(X)]^2$$

#### Standard Deviation
$$\text{SD}(X) = \sigma = \sqrt{\text{Var}(X)}$$
Standard deviation returns the dispersion metric back to the original units of $X$.

#### Variances for Standard Distributions

1. **Single Fair 6-Sided Die:**
   $$E(X) = 3.5, \quad E(X^2) = \frac{1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2}{6} = \frac{91}{6} \approx 15.167$$
   $$\text{Var}(X) = 15.167 - (3.5)^2 = 15.167 - 12.25 = \frac{35}{12} \approx 2.917$$
   $$\text{SD}(X) = \sqrt{2.917} \approx 1.708$$

2. **Bernoulli Random Variable:**
   Since $X \in \{0, 1\}$, $X^2 = X$, so $E(X^2) = E(X) = p$.
   $$\text{Var}(X) = p - p^2 = p(1-p)$$
   *(Variance reaches its theoretical maximum at $p = 0.5 \implies \text{Var} = 0.25$)*.

3. **Discrete Uniform Random Variable ($1$ to $n$):**
   $$E(X) = \frac{n+1}{2}, \quad E(X^2) = \frac{(n+1)(2n+1)}{6}$$
   $$\text{Var}(X) = \frac{(n+1)(2n+1)}{6} - \left(\frac{n+1}{2}\right)^2 = \frac{n^2 - 1}{12}$$

---
### -->Transformation and Sum Properties of Variance

#### Linear Transformations
- **Multiplying by constant:**
  $$\text{Var}(cX) = E[(cX - c\mu)^2] = c^2 E[(X - \mu)^2] = c^2 \text{Var}(X)$$
- **Adding a constant:**
  $$\text{Var}(X + c) = E[((X + c) - (\mu + c))^2] = E[(X - \mu)^2] = \text{Var}(X)$$
  *(Shifting data does not alter distance between points).*

Combined:
$$\text{Var}(aX + b) = a^2 \text{Var}(X)$$
$$\text{SD}(aX + b) = |a| \cdot \text{SD}(X)$$

#### Variance of a Sum: Crucial Independence Condition
Unlike expectation, variance is **not** generally additive:
$$\text{Var}(X+Y) \ne \text{Var}(X) + \text{Var}(Y) \quad \text{(in general)}$$

**Counterexample ($Y = X$):**
$$\text{Var}(X+X) = \text{Var}(2X) = 2^2 \text{Var}(X) = 4\text{Var}(X)$$
Whereas $\text{Var}(X) + \text{Var}(X) = 2\text{Var}(X)$. Because $4\text{Var}(X) \ne 2\text{Var}(X)$, the sum rule fails without independence.

> **Independence Theorem:**
> If $X$ and $Y$ are **independent** random variables:
> $$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$$
> $$\text{Var}(X - Y) = \text{Var}(X + (-1)Y) = \text{Var}(X) + (-1)^2 \text{Var}(Y) = \text{Var}(X) + \text{Var}(Y)$$
> $$\text{SD}(X \pm Y) = \sqrt{\text{Var}(X) + \text{Var}(Y)}$$

*Note:* You cannot add standard deviations directly ($\text{SD}(X+Y) \ne \text{SD}(X) + \text{SD}(Y)$).

- **Sum of 2 Independent Dice:**
  $$\text{Var}(X+Y) = \frac{35}{12} + \frac{35}{12} = \frac{70}{12} \approx 5.833$$
- **Number of Heads in 3 Independent Coin Flips:**
  Each flip is an independent Bernoulli with $\text{Var}(X_i) = 0.5(1-0.5) = 0.25$:
  $$\text{Var}(X_1 + X_2 + X_3) = 0.25 + 0.25 + 0.25 = 0.75$$

---
### Practice Problems

##### P1. PMF Analysis and Transformations
A random variable $X$ has PMF:
$$P(X=1) = 0.2, \quad P(X=2) = 0.5, \quad P(X=3) = 0.3$$
Find $E(X)$, $\text{Var}(X)$, $\text{SD}(X)$, and the expectation and variance of $Y = 4X - 3$.

**Solution:**
$$E(X) = 1(0.2) + 2(0.5) + 3(0.3) = 0.2 + 1.0 + 0.9 = 2.1$$
$$E(X^2) = 1^2(0.2) + 2^2(0.5) + 3^2(0.3) = 0.2 + 2.0 + 2.7 = 4.9$$
$$\text{Var}(X) = E(X^2) - [E(X)]^2 = 4.9 - (2.1)^2 = 4.9 - 4.41 = 0.49$$
$$\text{SD}(X) = \sqrt{0.49} = 0.7$$
Using transformation rules:
$$E(Y) = E(4X - 3) = 4E(X) - 3 = 4(2.1) - 3 = 5.4$$
$$\text{Var}(Y) = \text{Var}(4X - 3) = 4^2 \text{Var}(X) = 16 \times 0.49 = 7.84$$

---

##### P2. Dealership Sales and Profit
Daily car sales $X$ follow the distribution:
$$P(X=0)=0.10, \quad P(X=1)=0.25, \quad P(X=2)=0.35, \quad P(X=3)=0.20, \quad P(X=4)=0.10$$
Profit per car is ₹50,000 ($Y = 50000X$). Find daily expected profit and variance.

**Solution:**
$$E(X) = 0(0.10) + 1(0.25) + 2(0.35) + 3(0.20) + 4(0.10) = 0 + 0.25 + 0.70 + 0.60 + 0.40 = 1.95$$
$$E(Y) = 50{,}000 \times E(X) = 50{,}000 \times 1.95 = \text{₹}97{,}500$$
$$E(X^2) = 0(0.10) + 1(0.25) + 4(0.35) + 9(0.20) + 16(0.10) = 5.05$$
$$\text{Var}(X) = 5.05 - (1.95)^2 = 5.05 - 3.8025 = 1.2475$$
$$\text{Var}(Y) = (50{,}000)^2 \times \text{Var}(X) = 2.5 \times 10^9 \times 1.2475 = 3{,}118{,}750{,}000$$

---

##### P3. Independent Distributions (Uniform & Bernoulli)
(a) An 8-sided fair die ($X \in \{1, \dots, 8\}$) is rolled. Find $E(X)$, $\text{Var}(X)$, and $\text{SD}(X)$.
(b) A coin with $P(\text{Heads}) = 0.65$ is flipped 5 independent times. Let $W$ be total heads. Find $E(W)$ and $\text{Var}(W)$.

**Solution:**
(a) Discrete uniform with $n=8$:
$$E(X) = \frac{8+1}{2} = 4.5$$
$$\text{Var}(X) = \frac{8^2 - 1}{12} = \frac{63}{12} = 5.25$$
$$\text{SD}(X) = \sqrt{5.25} \approx 2.291$$

(b) Each trial $Y_i \sim \text{Bernoulli}(p=0.65)$ with $E(Y_i) = 0.65$ and $\text{Var}(Y_i) = 0.65(1-0.65) = 0.2275$.
By independence:
$$E(W) = \sum_{i=1}^5 E(Y_i) = 5 \times 0.65 = 3.25$$
$$\text{Var}(W) = \sum_{i=1}^5 \text{Var}(Y_i) = 5 \times 0.2275 = 1.1375$$

---

##### P4. Hypergeometric Committee Selection
A team of $n=4$ people is chosen without replacement from 15 engineers and 10 managers ($N=25, M=15$).
(a) Find expected number of engineers $E(X)$.
(b) Find expected number of managers $E(Y)$.
(c) Verify linearity of sums.

**Solution:**
(a) $E(X) = n \left(\frac{M}{N}\right) = 4 \left(\frac{15}{25}\right) = 4(0.6) = 2.4$
(b) $E(Y) = 4 \left(\frac{10}{25}\right) = 4(0.4) = 1.6$
(c) $E(X+Y) = E(X) + E(Y) = 2.4 + 1.6 = 4$. Since the total team size is fixed at 4, $X+Y=4$ identically, confirming $E(X+Y)=4$.

---

##### P5. Multi-Batch Quality Inspection
A sample of $n=3$ items is inspected without replacement from a batch of $N=20$ items containing $M=6$ defectives.
(a) Find expected defectives $E(X)$ in one batch.
(b) Find the probability of 0 defectives $P(X=0)$.
(c) Find $P(X \ge 1)$.
(d) If 5 identical independent batches are inspected, find expected total defectives $E(T)$.

**Solution:**
(a) $E(X) = 3 \left(\frac{6}{20}\right) = 0.9$
(b) Using combinations:
$$P(X=0) = \frac{\binom{6}{0}\binom{14}{3}}{\binom{20}{3}} = \frac{1 \times 364}{1140} = \frac{364}{1140} \approx 0.3193$$
(c) $P(X \ge 1) = 1 - P(X=0) = 1 - 0.3193 = 0.6807$
(d) By linearity of expectation:
$$E(T) = \sum_{i=1}^5 E(X_i) = 5 \times 0.9 = 4.5$$