## -->Bernoulli distribution

### What Is a Bernoulli Trial?

A **Bernoulli trial** (or experiment) is any trial whose outcome is classified into exactly one of two mutually exclusive categories: **success** and **failure**.

Mapping to a random variable:
- Assign **$1$ to success**
- Assign **$0$ to failure**

This numerical assignment defines a **Bernoulli random variable**.

### Examples and Classification

A Bernoulli trial does not require the underlying physical experiment to have only two outcomes; it depends entirely on how outcomes are grouped:
- **Coin toss:** Head = success ($1$), Tail = failure ($0$).
- **Die roll redefined:** A 6-sided die can be grouped into success = "rolling a 6" and failure = "rolling anything else $\{1, 2, 3, 4, 5\}$."
- **Survey polls:** Yes = success ($1$), No = failure ($0$).
- **Manufacturing:** Defective item = success ($1$), Non-defective = failure ($0$).

**Non-Example:** Recording a person's continuous age has no natural two-category split in its raw form. It is not a Bernoulli trial unless an artificial binary split is imposed (e.g., age $> 30$ vs. age $\le 30$).

### Formal PMF

$X$ takes values in $\{0, 1\}$:
$$P(X=1) = p, \quad P(X=0) = 1-p$$
Compact notation: $X \sim \text{Bernoulli}(p)$, where $p \in [0, 1]$.

### Expectation and Variance

- **Expectation:**
  $$E(X) = 0(1-p) + 1(p) = p$$
- **Variance:**
  Since $X \in \{0, 1\}$, $X^2 = X$, so $E(X^2) = E(X) = p$.
  $$\text{Var}(X) = E(X^2) - [E(X)]^2 = p - p^2 = p(1-p)$$

### Maximizing Variance

Since $\text{Var}(X) = p - p^2$ is a downward-opening parabola:
$$\frac{d}{dp}[p - p^2] = 1 - 2p = 0 \implies p = \frac{1}{2}$$

- **Maximum variance:** Occurs at $p = 0.5$, where $\text{Var}(X) = 0.5(1 - 0.5) = 0.25$. This corresponds to maximum uncertainty (e.g., a fair coin).
- **Minimum variance:** At $p = 0$ or $p = 1$, the outcome is deterministic, so $\text{Var}(X) = 0$.

---
### Practice Problems: Bernoulli

##### P1. Defining Outcomes
Identify what constitutes "success" and "failure" for:
1. Quality inspection of a bolt.
2. Checking if a die roll exceeds 4.
3. Guessing a True/False answer.

**Solution:**
1. Success = Defective, Failure = Non-defective (or vice versa).
2. Success = $\{5, 6\}$, Failure = $\{1, 2, 3, 4\}$.
3. Success = Correct, Failure = Incorrect.

##### P2. Parameter Solving
A Bernoulli variable has $\text{Var}(X) = 0.16$ and $p < 0.5$. Find $p$.

**Solution:**
$$p(1-p) = 0.16 \implies p^2 - p + 0.16 = 0$$
$$p = \frac{1 \pm \sqrt{1 - 4(0.16)}}{2} = \frac{1 \pm \sqrt{0.36}}{2} = \frac{1 \pm 0.6}{2}$$
Roots are $p = 0.8$ or $p = 0.2$. Since $p < 0.5$:
$$p = 0.2$$

##### P3. Half-Maximum Variance
Find the values of $p$ where $\text{Var}(X)$ is half of its maximum value ($0.25 / 2 = 0.125$).

**Solution:**
$$p(1-p) = 0.125 \implies p^2 - p + 0.125 = 0$$
$$p = \frac{1 \pm \sqrt{1 - 0.5}}{2} = \frac{1 \pm \sqrt{0.5}}{2} \approx \frac{1 \pm 0.7071}{2}$$
$$p \approx 0.8536 \quad \text{or} \quad p \approx 0.1464$$

---
## -->IID Bernoulli trials and Binomial Distribution

### Setup: n Independent, Identical Bernoulli Trials

Repeating a Bernoulli trial $n$ times requires:
1. **Identical distribution:** Each trial has the exact same probability of success $p$.
2. **Independence:** The outcome of one trial does not affect any other.

Let $X = \text{total number of successes across } n \text{ trials}$. Then $X \sim \text{Binomial}(n, p)$.

### Derivation of the Binomial PMF

Consider $n = 3$ independent trials. The sample space has $2^3 = 8$ outcomes:
- $3$ successes: $SSS \implies P(SSS) = p \cdot p \cdot p = p^3$ (1 sequence)
- $2$ successes: $SSF, SFS, FSS \implies \text{each has probability } p^2(1-p)$ (3 sequences)
- $1$ success: $SFF, FSF, FFS \implies \text{each has probability } p(1-p)^2$ (3 sequences)
- $0$ successes: $FFF \implies P(FFF) = (1-p)^3$ (1 sequence)

The number of ways to place $i$ successes into $n$ trial slots without regard to order is given by combinations:
$$\binom{n}{i} = \frac{n!}{i!(n-i)!}$$

For $n=3, i=2$: $\binom{3}{2} = 3$ sequences.

#### General Binomial Formula
For any sequence with $i$ successes and $n-i$ failures, the probability of that specific ordered sequence occurring is:
$$p^i(1-p)^{n-i}$$
Multiplying by the number of distinct arrangements:
$$P(X=i) = \binom{n}{i} p^i (1-p)^{n-i}, \quad i = 0, 1, 2, \dots, n$$

#### Boundary Checks
- **All successes ($i=n$):** $P(X=n) = \binom{n}{n} p^n (1-p)^0 = p^n$
- **All failures ($i=0$):** $P(X=0) = \binom{n}{0} p^0 (1-p)^n = (1-p)^n$
- **$n-1$ successes:** $P(X=n-1) = \binom{n}{n-1} p^{n-1} (1-p)^1 = n p^{n-1}(1-p)$

---
## -->Distribution and Shape of Binomial Rv

### Verification with Coin Tosses ($n=3, p=0.5$)
$$P(X=0) = \binom{3}{0}(0.5)^3 = \frac{1}{8}, \quad P(X=1) = \binom{3}{1}(0.5)^3 = \frac{3}{8}$$
$$P(X=2) = \binom{3}{2}(0.5)^3 = \frac{3}{8}, \quad P(X=3) = \binom{3}{3}(0.5)^3 = \frac{1}{8}$$
This reproduces the direct combinatorial enumeration from earlier weeks.

### Effect of Parameters on Shape

#### 1. Varying $p$ at Fixed, Small $n$ ($n=4$)
- **$p < 0.5$ ($p = 0.3$):** Right-skewed (positively skewed). Success is less likely; probability mass clusters at smaller values of $X$ with a thinning tail to the right.
- **$p = 0.5$:** Perfectly symmetric. Coefficients follow Pascal's triangle ($1, 4, 6, 4, 1$), peaking at the center $X = 2$.
- **$p > 0.5$ ($p = 0.8$):** Left-skewed (negatively skewed). Success is more likely; probability mass clusters at larger values of $X$ with a thinning tail to the left.

#### 2. Effect of Large $n$
As $n$ increases (e.g., $n = 40$ or $100$):
- Even if $p \ne 0.5$ (such as $p=0.3$ or $p=0.8$), the pronounced skewness diminishes.
- The distribution approaches an approximately **symmetric, bell-shaped curve** centered at $\mu = np$.
- This property serves as the foundation for approximating Binomial distributions with Normal distributions.

---
## -->Modeling Situations as Binomial Distribution

### The 4-Step Modeling Framework
1. **Define $X$:** Clearly state what is counted as a "success."
2. **Verify i.i.d.:** Ensure fixed trials, binary outcomes, constant $p$, and independence.
3. **Identify $n$ and $p$:** Extract sample size and per-trial success probability.
4. **Translate and Calculate:** Convert the question into $P(X = k)$, $P(X \ge k)$, or $P(X \le k)$.

#### Example 1: Quality Control (Toothbrush Packs)
- Setup: Pack size $n=3$, defective probability $= 0.10 \implies$ Good probability $p = 0.90$.
- Complaint triggered if $> 1$ toothbrush is defective $\implies X \le 1$ good toothbrushes.
  $$P(\text{complaint}) = P(X=0) + P(X=1)$$
  $$P(X=0) = \binom{3}{0}(0.9)^0(0.1)^3 = 0.001$$
  $$P(X=1) = \binom{3}{1}(0.9)^1(0.1)^2 = 3(0.9)(0.01) = 0.027$$
  $$P(\text{complaint}) = 0.001 + 0.027 = 0.028 \text{ (2.8\%)}$$
- Business Decision: If complaint tolerance is $3\%$, the standard is met ($2.8\% \le 3\%$). If tolerance is $2.5\%$, it fails.

#### Example 2: Rolling 4 Fair Dice ($n=4, p=1/6$)
- Probability of no sixes:
  $$P(X=0) = \binom{4}{0}\left(\frac{1}{6}\right)^0\left(\frac{5}{6}\right)^4 = \left(\frac{5}{6}\right)^4 \approx 0.4823$$
- Probability of at least one six (using the complement rule):
  $$P(X \ge 1) = 1 - P(X=0) = 1 - 0.4823 = 0.5177$$

#### Example 3: Satellite Subsystem Reliability
- Setup: $n = 4$ independent components, each functioning with $p = 0.8$. System operates if at least $2$ function ($X \ge 2$).
  $$P(X \ge 2) = P(X=2) + P(X=3) + P(X=4)$$
  $$P(X=2) = \binom{4}{2}(0.8)^2(0.2)^2 = 6(0.64)(0.04) = 0.1536$$
  $$P(X=3) = \binom{4}{3}(0.8)^3(0.2)^1 = 4(0.512)(0.2) = 0.4096$$
  $$P(X=4) = \binom{4}{4}(0.8)^4(0.2)^0 = 1(0.4096)(1) = 0.4096$$
  $$P(\text{system works}) = 0.1536 + 0.4096 + 0.4096 = 0.9728 \text{ (97.28\%)}$$

#### Example 4: Guessing on a Multiple-Choice Quiz
- Setup: $n = 5$ questions, 4 options each $\implies p = 0.25$.
- Probability of scoring $\ge 4$ by pure guessing:
  $$P(X \ge 4) = P(X=4) + P(X=5)$$
  $$P(X=4) = \binom{5}{4}(0.25)^4(0.75)^1 = 5(0.003906)(0.75) \approx 0.01465$$
  $$P(X=5) = \binom{5}{5}(0.25)^5(0.75)^0 = 1(0.000977)(1) \approx 0.00098$$
  $$P(X \ge 4) \approx 0.01465 + 0.00098 = 0.01563 \text{ (1.56\%)}$$

---
## -->Expectation and Variance of Binomial Rv

### Derivation via Sum of Bernoulli Trials
A Binomial random variable can be written as the sum of $n$ independent Bernoulli variables:
$$X = \sum_{j=1}^n X_j, \quad \text{where } X_j \sim \text{Bernoulli}(p)$$

#### 1. Expectation
By linearity of expectation (holds regardless of independence):
$$E(X) = E\left(\sum_{j=1}^n X_j\right) = \sum_{j=1}^n E(X_j) = \sum_{j=1}^n p = np$$

#### 2. Variance
Since individual trials $X_j$ are independent:
$$\text{Var}(X) = \text{Var}\left(\sum_{j=1}^n X_j\right) = \sum_{j=1}^n \text{Var}(X_j) = \sum_{j=1}^n p(1-p) = np(1-p)$$
$$\text{SD}(X) = \sqrt{np(1-p)}$$

### Algebraic Method: Recovering Parameters
Given $E(X) = A$ and $\text{Var}(X) = B$:
$$\frac{\text{Var}(X)}{E(X)} = \frac{np(1-p)}{np} = 1 - p \implies p = 1 - \frac{B}{A}$$
$$n = \frac{E(X)}{p} = \frac{A}{p}$$

**Worked Example:**
Given $E(X) = 4.5$ and $\text{Var}(X) = 0.45$:
1. $1 - p = \frac{0.45}{4.5} = 0.10 \implies p = 0.90$
2. $n = \frac{4.5}{0.90} = 5$
3. PMF is fully identified as $X \sim \text{Binomial}(n=5, p=0.9)$.

---
## -->Hypergeometric Distribution

### Breakdown of the Binomial Model
Binomial modeling requires **sampling with replacement** (or an infinite population) so that $p$ remains constant. When sampling **without replacement** from a small finite population, draws are dependent, and success probabilities shift dynamically with every draw.

### Setup and Formulation
- Total population size: $N$
- Count of type-1 items ("successes" available): $M$
- Count of type-2 items ("failures" available): $N - M$
- Sample size drawn without replacement: $n$
- $X$ = count of type-1 items selected in the sample.

Notation: $X \sim \text{Hypergeometric}(N, M, n)$.

#### Hypergeometric PMF
$$P(X=i) = \frac{\binom{M}{i}\binom{N-M}{n-i}}{\binom{N}{n}}$$

#### Support (Valid Range of $X$)
$X$ cannot exceed the sample size $n$ or the total available items $M$. Similarly, the number of failures drawn cannot exceed $N - M$:
$$\max(0, n - (N - M)) \le X \le \min(n, M)$$

#### Worked Ball Problem ($N=7, M=3 \text{ black}, N-M=4 \text{ white}, n=2$)
$$P(X=0) = \frac{\binom{3}{0}\binom{4}{2}}{\binom{7}{2}} = \frac{1 \times 6}{21} = \frac{6}{21} = \frac{2}{7}$$
$$P(X=1) = \frac{\binom{3}{1}\binom{4}{1}}{\binom{7}{2}} = \frac{3 \times 4}{21} = \frac{12}{21} = \frac{4}{7}$$
$$P(X=2) = \frac{\binom{3}{2}\binom{4}{0}}{\binom{7}{2}} = \frac{3 \times 1}{21} = \frac{3}{21} = \frac{1}{7}$$
Check: $\sum P(X) = \frac{2+4+1}{7} = 1$.

### Expectation, Variance, and Finite Population Correction

$$E(X) = n \left(\frac{M}{N}\right)$$
$$\text{Var}(X) = n \left(\frac{M}{N}\right)\left(1 - \frac{M}{N}\right)\left[\frac{N-n}{N-1}\right]$$

- **Comparison to Binomial:** Letting $p = \frac{M}{N}$, the mean is identical ($E(X) = np$). The variance equals the Binomial variance $np(1-p)$ scaled by the **finite population correction factor**:
  $$\text{FPC} = \frac{N-n}{N-1}$$
- **Boundary Behavior:**
  - If $n = 1$: $\text{FPC} = \frac{N-1}{N-1} = 1 \implies \text{reduces to Bernoulli variance } p(1-p)$.
  - If $n = N$: $\text{FPC} = \frac{0}{N-1} = 0 \implies \text{Var}(X) = 0$ (all items are sampled; no uncertainty).
- **Approximation Rule:** When $n/N < 0.05$ (sample is less than 5% of the population), $\text{FPC} \approx 1$. The Hypergeometric distribution is well-approximated by $\text{Binomial}\left(n, p = \frac{M}{N}\right)$.

---
## -->Poisson Distribution

### Definition and Modeling Context
The **Poisson distribution** models the number of occurrences of an event within a **fixed interval of time or space**, assuming events occur at a known constant average rate $\lambda$ independently of the time since the last event.

Assumptions:
1. Events occur at constant average rate $\lambda$ per interval.
2. Occurrences in non-overlapping sub-intervals are independent.
3. For an arbitrarily small sub-interval $\Delta t$, the probability of two or more events occurring simultaneously is negligible.

### Mathematical Derivation as Limit of Binomial
Divide an interval of rate $\lambda$ into $n$ equal sub-intervals. As $n \to \infty$, the probability of an event in each tiny window is $p = \frac{\lambda}{n} \to 0$.
$$P(X=i) = \lim_{n \to \infty} \binom{n}{i} \left(\frac{\lambda}{n}\right)^i \left(1 - \frac{\lambda}{n}\right)^{n-i}$$
$$= \lim_{n \to \infty} \frac{n(n-1)\dots(n-i+1)}{i!} \frac{\lambda^i}{n^i} \left(1 - \frac{\lambda}{n}\right)^n \left(1 - \frac{\lambda}{n}\right)^{-i}$$
Since $\lim_{n \to \infty} \left(1 - \frac{\lambda}{n}\right)^n = e^{-\lambda}$ and $\frac{n(n-1)\dots(n-i+1)}{n^i} \to 1$:
$$P(X=i) = \frac{e^{-\lambda} \lambda^i}{i!}, \quad i = 0, 1, 2, \dots$$

Notation: $X \sim \text{Poisson}(\lambda)$.

### Moments and Diagnostic Signature
$$E(X) = \lambda$$
$$\text{Var}(X) = \lambda$$
$$\text{SD}(X) = \sqrt{\lambda}$$

**Diagnostic Rule:** If sample count data exhibits a sample mean and sample variance of roughly equal value ($\bar{x} \approx s^2$), the Poisson distribution is the natural model candidate.

### Rescaling Rates Linearly
If an event occurs at rate $\lambda$ per basic unit, the rate over a window of length $t$ is $\lambda_{\text{new}} = \lambda \cdot t$.
- If accidents occur at $\lambda = 0.42 \text{ per day}$:
  $$\lambda_{5\text{-day}} = 5 \times 0.42 = 2.1$$
  $$P(X=2 \text{ in 5 days}) = \frac{e^{-2.1} (2.1)^2}{2!} = \frac{0.12246 \times 4.41}{2} \approx 0.270$$

---
## Comprehensive Practice Problems

##### Problem 1: Drug Trial (Binomial Workup)
A drug is effective in 75% of patients ($p = 0.75$). Administered to $n = 6$ independent patients.
(a) Find $P(X=6)$, $P(X=0)$, and $P(X \ge 5)$.
(b) Find $E(X)$, $\text{Var}(X)$, and describe the skewness.

**Solution:**
(a)
$$P(X=6) = \binom{6}{6}(0.75)^6(0.25)^0 = (0.75)^6 \approx 0.1780$$
$$P(X=0) = \binom{6}{0}(0.75)^0(0.25)^6 = (0.25)^6 \approx 0.000244$$
$$P(X=5) = \binom{6}{5}(0.75)^5(0.25)^1 = 6(0.2373)(0.25) \approx 0.3560$$
$$P(X \ge 5) = P(X=5) + P(X=6) = 0.3560 + 0.1780 = 0.5340$$
(b)
$$E(X) = np = 6(0.75) = 4.5$$
$$\text{Var}(X) = np(1-p) = 6(0.75)(0.25) = 1.125$$
Since $p = 0.75 > 0.5$, the distribution is **left-skewed**.

---

##### Problem 2: Parameter Reconstruction (Binomial)
A binomial variable $X$ has $E(X) = 16$ and $\text{Var}(X) = 3.2$.
(a) Find $n$ and $p$.
(b) Find $P(X = n)$ and $P(X \le n-1)$.
(c) If $n$ is doubled under the same $p$, find the new $E(X)$ and $\text{Var}(X)$.

**Solution:**
(a)
$$1 - p = \frac{\text{Var}(X)}{E(X)} = \frac{3.2}{16} = 0.2 \implies p = 0.8$$
$$n = \frac{E(X)}{p} = \frac{16}{0.8} = 20$$
(b)
$$P(X=20) = (0.8)^{20} \approx 0.01153$$
$$P(X \le 19) = 1 - P(X=20) = 1 - 0.01153 = 0.98847$$
(c)
For $n = 40, p = 0.8$:
$$E(X) = 40(0.8) = 32$$
$$\text{Var}(X) = 40(0.8)(0.2) = 6.4$$

---

##### Problem 3: Quality Sampling (Hypergeometric)
A batch of $N = 40$ components has $M = 5$ defectives. An inspector draws $n = 6$ without replacement.
(a) State the support of $X$.
(b) Find $P(X=0)$.
(c) Find $E(X)$ and $\text{Var}(X)$.

**Solution:**
(a) Support: $\max(0, 6 - (40 - 5)) \le X \le \min(6, 5) \implies 0 \le X \le 5$.
(b)
$$P(X=0) = \frac{\binom{5}{0}\binom{35}{6}}{\binom{40}{6}} = \frac{1 \times 1{,}623{,}160}{3{,}838{,}380} \approx 0.4229$$
(c)
$$E(X) = n \left(\frac{M}{N}\right) = 6 \left(\frac{5}{40}\right) = 0.75$$
$$\text{Var}(X) = 6 \left(\frac{5}{40}\right)\left(\frac{35}{40}\right)\left[\frac{40 - 6}{40 - 1}\right] = 6(0.125)(0.875)\left(\frac{34}{39}\right) \approx 0.65625 \times 0.8718 \approx 0.5721$$

---

##### Problem 4: Flaw Density and Conversion (Poisson)
A manuscript contains 1,500 typos distributed randomly across 500 pages.
(a) Find the average rate $\lambda$ per page.
(b) Find the probability a selected page contains zero typos.
(c) Determine the expected number of typo-free pages in the entire 500-page book.

**Solution:**
(a) $\lambda = \frac{1500}{500} = 3 \text{ typos/page}$.
(b)
$$P(X=0) = \frac{e^{-3} 3^0}{0!} = e^{-3} \approx 0.04979$$
(c)
$$\text{Expected count} = 500 \times P(X=0) = 500 \times 0.04979 \approx 24.89 \text{ pages}$$

---

##### Problem 5: Call Center Traffic (Poisson)
Calls arrive at an average rate of $\lambda = 4 \text{ calls/minute}$.
(a) Find $P(X=3)$.
(b) Find $P(X \le 1)$.
(c) Find $P(X \ge 5)$ using the complement rule.

**Solution:**
(a)
$$P(X=3) = \frac{e^{-4} 4^3}{3!} = \frac{e^{-4} \times 64}{6} \approx 0.018316 \times 10.6667 \approx 0.1954$$
(b)
$$P(X \le 1) = P(X=0) + P(X=1) = e^{-4}\left(\frac{4^0}{0!} + \frac{4^1}{1!}\right) = e^{-4}(1 + 4) = 5e^{-4} \approx 5(0.018316) \approx 0.0916$$
(c)
$$P(X \ge 5) = 1 - P(X \le 4) = 1 - [P(0) + P(1) + P(2) + P(3) + P(4)]$$
$$P(0) \approx 0.0183, \quad P(1) \approx 0.0733, \quad P(2) = \frac{e^{-4} \times 16}{2} \approx 0.1465$$
$$P(3) \approx 0.1954, \quad P(4) = \frac{e^{-4} \times 256}{24} \approx 0.1954$$
$$P(X \le 4) \approx 0.0183 + 0.0733 + 0.1465 + 0.1954 + 0.1954 = 0.6289$$
$$P(X \ge 5) = 1 - 0.6289 = 0.3711$$