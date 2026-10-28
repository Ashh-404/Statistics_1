### -->Random Variables

In earlier probability topics, we worked directly with literal experimental outcomes—like rolling a 3, or getting $HH$ on two coin tosses. 

Often in real applications, we do not care about the raw outcome itself, but rather a **number calculated from the outcome**. 
- *Example:* In a board game where you advance by the total of two rolled dice, you do not care whether you rolled $(3, 4)$ or $(5, 2)$; you only care that the sum is $7$.

>**Definition:** A **random variable** is a rule that assigns a numerical value to each possible outcome of a random experiment. Because the outcome of the experiment is random, the resulting number is also random.

#### -> Simplest Case: Single Coin Toss

Toss a fair coin once: Sample space $S = \{\text{Head}, \text{Tail}\}$.  
Define random variable $X$:
- $X = 1$ if Head
- $X = 0$ if Tail

Probabilities:
$$P(X = 1) = P(\text{Head}) = \frac{1}{2}$$
$$P(X = 0) = P(\text{Tail}) = \frac{1}{2}$$

Instead of tracking verbal outcomes ("Head", "Tail"), we now track the numerical variable $X$.

---

#### -> Example 1: Sum of Two Dice

**Setup:** Roll a fair six-sided die twice.  
Total possible outcomes = $6 \times 6 = 36$ equally likely pairs, each with probability $\frac{1}{36}$.

Define $X = \text{sum of the two dice}$.

Specific outcomes mapped to values of $X$:
- Outcome $(1, 1) \implies X = 1 + 1 = 2$
- Outcome $(1, 6) \implies X = 1 + 6 = 7$
- Outcome $(3, 4) \implies X = 3 + 4 = 7$
- Outcome $(6, 6) \implies X = 6 + 6 = 12$

Multiple distinct raw outcomes can map to the exact same value of $X$ (e.g., both $(1, 6)$ and $(3, 4)$ give $X = 7$). The random variable collapses 36 raw outcomes into 11 possible sums: whole numbers from $2$ to $12$.

##### Finding the Probabilities:
- **$P(X = 2)$:** Only outcome $(1, 1)$ sums to $2$ (1 outcome) $\implies P(X = 2) = \frac{1}{36}$
- **$P(X = 3)$:** Outcomes $(1, 2), (2, 1)$ (2 outcomes) $\implies P(X = 3) = \frac{2}{36}$
- **$P(X = 4)$:** Outcomes $(1, 3), (2, 2), (3, 1)$ (3 outcomes) $\implies P(X = 4) = \frac{3}{36}$
- **$P(X = 5)$:** Outcomes $(1, 4), (2, 3), (3, 2), (4, 1)$ (4 outcomes) $\implies P(X = 5) = \frac{4}{36}$
- **$P(X = 6)$:** Outcomes $(1, 5), (2, 4), (3, 3), (4, 2), (5, 1)$ (5 outcomes) $\implies P(X = 6) = \frac{5}{36}$
- **$P(X = 7)$:** Outcomes $(1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1)$ (6 outcomes) $\implies P(X = 7) = \frac{6}{36}$
- **$P(X = 8)$:** Outcomes $(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)$ (5 outcomes) $\implies P(X = 8) = \frac{5}{36}$
- **$P(X = 9)$:** Outcomes $(3, 6), (4, 5), (5, 4), (6, 3)$ (4 outcomes) $\implies P(X = 9) = \frac{4}{36}$
- **$P(X = 10)$:** Outcomes $(4, 6), (5, 5), (6, 4)$ (3 outcomes) $\implies P(X = 10) = \frac{3}{36}$
- **$P(X = 11)$:** Outcomes $(5, 6), (6, 5)$ (2 outcomes) $\implies P(X = 11) = \frac{2}{36}$
- **$P(X = 12)$:** Outcome $(6, 6)$ (1 outcome) $\implies P(X = 12) = \frac{1}{36}$

| $x$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Ways** | 1 | 2 | 3 | 4 | 5 | 6 | 5 | 4 | 3 | 2 | 1 |
| **$P(X = x)$** | $\frac{1}{36}$ | $\frac{2}{36}$ | $\frac{3}{36}$ | $\frac{4}{36}$ | $\frac{5}{36}$ | $\frac{6}{36}$ | $\frac{5}{36}$ | $\frac{4}{36}$ | $\frac{3}{36}$ | $\frac{2}{36}$ | $\frac{1}{36}$ |

The counts rise symmetrically from 1 to 6 (peaking at $X=7$) and fall back down to 1.  
Sum check:
$$\frac{1 + 2 + 3 + 4 + 5 + 6 + 5 + 4 + 3 + 2 + 1}{36} = \frac{36}{36} = 1$$

---

#### -> Example 2: Minimum of Two Dice (Same Experiment, Different Variable)

On the exact same two-dice experiment, define $Y = \text{smaller of the two values}$ (if equal, $Y$ takes that common value).

Possible values of $Y$: $\{1, 2, 3, 4, 5, 6\}$.

- **Finding $P(Y = 1)$:** The smaller value is 1 whenever at least one die shows a 1.
  - First die is 1: $(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6)$ (6 pairs)
  - Second die is 1: $(1, 1), (2, 1), (3, 1), (4, 1), (5, 1), (6, 1)$ (6 pairs)
  - Outcome $(1, 1)$ is shared by both, so subtract the overlap: $6 + 6 - 1 = 11$ outcomes.
  $$P(Y = 1) = \frac{11}{36}$$

Using similar counting for the remaining values:
- $P(Y = 2) = \frac{9}{36}$ (pairs from $\{2, 3, 4, 5, 6\}$ containing at least one 2)
- $P(Y = 3) = \frac{7}{36}$
- $P(Y = 4) = \frac{5}{36}$
- $P(Y = 5) = \frac{3}{36}$
- $P(Y = 6) = \frac{1}{36}$ (only $(6, 6)$)

Sum check:
$$\frac{11 + 9 + 7 + 5 + 3 + 1}{36} = \frac{36}{36} = 1$$

>**General 3-Step Procedure for Random Variables:**
>1. Identify all possible values the random variable can take.
>2. For each value, determine which outcomes from the sample space produce it.
>3. Calculate the probability of that set of outcomes.

---

#### -> Example 3: Tossing a Fair Coin 3 Times

$2 \times 2 \times 2 = 8$ equally likely outcomes:  
$S = \{HHH, HHT, HTH, HTT, THH, THT, TTH, TTT\}$.

##### Variable 1: $X = \text{total number of heads}$
- $X = 0: \{TTT\} \implies P(X = 0) = \frac{1}{8}$
- $X = 1: \{HTT, THT, TTH\} \implies P(X = 1) = \frac{3}{8}$
- $X = 2: \{HHT, HTH, THH\} \implies P(X = 2) = \frac{3}{8}$
- $X = 3: \{HHH\} \implies P(X = 3) = \frac{1}{8}$

Sum check: $\frac{1 + 3 + 3 + 1}{8} = 1$.

##### Variable 2: $Y = \text{toss number where the first head appears}$
- $Y = 1: \{HHH, HHT, HTH, HTT\}$ (head on toss 1) $\implies P(Y = 1) = \frac{4}{8}$
- $Y = 2: \{THH, THT\}$ (first head on toss 2) $\implies P(Y = 2) = \frac{2}{8}$
- $Y = 3: \{TTH\}$ (first head on toss 3) $\implies P(Y = 3) = \frac{1}{8}$
- $Y = \text{nil}: \{TTT\}$ (no heads appear) $\implies P(Y = \text{nil}) = \frac{1}{8}$

Sum check: $\frac{4 + 2 + 1 + 1}{8} = 1$.

---

#### -> Example 4: Real-World Insurance Payout

An agency has two elderly clients with independent life insurance policies paying out ₹1 lakh each upon death within the year.
- Event $A$: Younger client dies, $P(A) = 0.05 \implies P(A^c) = 0.95$
- Event $B$: Older client dies, $P(B) = 0.10 \implies P(B^c) = 0.90$
- $A$ and $B$ are independent.

Define $X = \text{total payout in lakhs } \{0, 1, 2\}$.

- **$X = 0$ (neither client dies):**
  Event $A^c \cap B^c$. By independence:
  $$P(X = 0) = P(A^c) \times P(B^c) = 0.95 \times 0.90 = 0.855$$

- **$X = 1$ (exactly one client dies):**
  Disjoint events $(A \cap B^c)$ or $(A^c \cap B)$:
  $$P(A \cap B^c) = 0.05 \times 0.90 = 0.045$$
  $$P(A^c \cap B) = 0.95 \times 0.10 = 0.095$$
  $$P(X = 1) = 0.045 + 0.095 = 0.140$$

- **$X = 2$ (both clients die):**
  Event $A \cap B$:
  $$P(X = 2) = P(A) \times P(B) = 0.05 \times 0.10 = 0.005$$

Sum check: $0.855 + 0.140 + 0.005 = 1.000$.

---
---

### -->Discrete and Continuous Random Variables

| Type | Definition | Value Structure | Origin | Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Discrete** | Takes isolated, separate points on the number line | Countable list of distinct values (with gaps between them) | **Counting** | Number of defective items, goals scored, students present |
| **Continuous** | Takes any value within an unbroken interval | Uncountable continuum of values (no gaps) | **Measuring** | Height, weight, temperature, commute time |

#### The Apartment Complex Example
Consider an apartment building with 4 floors and 3 apartments per floor (1-BHK, 2-BHK, 3-BHK), giving 12 total apartments. One apartment is chosen at random.

On this same sample space, different random variables can be defined:
1. **$X = \text{number of bedrooms}$:** Values $\in \{1, 2, 3\} \implies$ **Discrete** (counted whole units).
2. **$Y = \text{floor number}$:** Values $\in \{1, 2, 3, 4\} \implies$ **Discrete** (counted whole levels).
3. **$Z = \text{area in square feet}$:** Values lie in continuous range $[900.00, 1800.00] \implies$ **Continuous** (measured quantity).
4. **$W = \text{distance from left edge (meters)}$:** Values lie in continuous interval $[324.0, 505.0] \implies$ **Continuous** (measured distance).

> Whether a random variable is discrete or continuous depends on **what numerical quantity you choose to measure**, not on the underlying experiment itself.

---
---

### -->Probability Mass Function (PMF)

For a discrete random variable $X$ taking values $x_1, x_2, \dots, x_n$, the **probability mass function (PMF)** is the rule or table that gives the probability of each specific value:
$$p(x_i) = P(X = x_i)$$

#### The Two Essential PMF Properties

1. **Non-negativity:** Every probability must be non-negative.
   $$p(x_i) \ge 0 \quad \text{for all } i$$
2. **Total Probability Axiom:** The sum of probabilities over all possible values must equal 1.
   $$\sum_i p(x_i) = 1$$

Both conditions must hold simultaneously for a function or table to be a valid PMF.

##### Testing Valid PMFs:

- **Case 1:** $X \in \{0, 1, 2\}$ with $P = \{0.25, 0.50, 0.25\}$  
  All $p(x_i) \ge 0$ and $0.25 + 0.50 + 0.25 = 1.0 \implies$ **Valid PMF**.

- **Case 2:** $X \in \{1, 2, 3, 4, 5\}$ with $P = \{0.4, 0.1, 0.2, 0.1, 0.3\}$  
  All $p(x_i) \ge 0$, but sum $= 0.4 + 0.1 + 0.2 + 0.1 + 0.3 = 1.1 \ne 1 \implies$ **Invalid PMF** (fails Property 2).

- **Case 3:** $X \in \{1, 2, 3, 4, 5\}$ with $P = \{0.2, 0.3, 0.4, -0.1, 0.2\}$  
  Sum $= 1.0$, but $P(X = 4) = -0.1 < 0 \implies$ **Invalid PMF** (fails Property 1). Negative probabilities are impossible.

- **Case 4:** $X \in \{1, 2, 3, 4, 5\}$ with $P = \{0.3, 0.1, 0.2, 0.4, 0.0\}$  
  All $p(x_i) \ge 0$ (a probability of 0 is valid; it denotes an impossible outcome) and sum $= 1.0 \implies$ **Valid PMF**.

---

#### Advanced Example: Countably Infinite Values (Poisson PMF Form)

A discrete variable can take an infinite list of countable values, such as $X \in \{0, 1, 2, 3, \dots\}$.

Suppose $P(X = i) = \frac{c \cdot \lambda^i}{i!}$ for $i = 0, 1, 2, \dots$, where $\lambda > 0$ and $c$ is a constant. Find $c$ to make this a valid PMF:

Using Property 2:
$$\sum_{i=0}^{\infty} P(X = i) = 1 \implies c \sum_{i=0}^{\infty} \frac{\lambda^i}{i!} = 1$$

From the standard Taylor series expansion, $\sum_{i=0}^{\infty} \frac{\lambda^i}{i!} = e^{\lambda}$:
$$c \cdot e^{\lambda} = 1 \implies c = e^{-\lambda}$$

Substituting $c$ gives the valid PMF:
$$P(X = i) = \frac{e^{-\lambda} \lambda^i}{i!} \quad \text{for } i = 0, 1, 2, \dots$$
*(This is the Poisson distribution).*

---
---

### -->Graphing the PMF & Distribution Shapes

A PMF graph plots:
- **x-axis:** Values of the random variable ($x_i$) in numerical order.
- **y-axis:** Probability $P(X = x_i)$.
- **Bar height:** The exact probability mass at that value.

#### Distribution Shapes

1. **Uniform Distribution:** All outcomes have equal probability. Bars have identical height.
   - *Example:* Rolling a single fair die: $P(X = x) = \frac{1}{6}$ for $x \in \{1, 2, 3, 4, 5, 6\}$.

2. **Symmetric Distribution:** The left and right halves are mirror images around a central point.
   - *Example:* Sum of two dice: peaks at $X = 7$ and slopes downward symmetrically on both sides.
   - *Example:* Number of heads in 3 coin tosses: probabilities $\left(\frac{1}{8}, \frac{3}{8}, \frac{3}{8}, \frac{1}{8}\right)$ centered between 1 and 2.

3. **Positively Skewed (Right-Skewed):** Most probability mass clusters on the left (lower values), with a long tail stretching toward the right.
   - *Example:* $X \in \{1, 2, 3, 4\}$ with $P = \{0.4, 0.3, 0.2, 0.1\}$.
   - *Example:* Minimum of two dice $Y$: highest at $Y=1$ ($\frac{11}{36}$), tapering down to $Y=6$ ($\frac{1}{36}$).

4. **Negatively Skewed (Left-Skewed):** Most probability mass clusters on the right (higher values), with a long tail stretching toward the left.
   - *Example:* $X \in \{1, 2, 3, 4\}$ with $P = \{0.1, 0.2, 0.3, 0.4\}$.

---
---

### -->Cumulative Distribution Function (CDF)

The PMF gives point probabilities $P(X = a)$. Often, we need cumulative probabilities over an interval (e.g., "at most 2 heads", "at least 1 accident").

>**Definition:** For any random variable $X$, the **cumulative distribution function (CDF)**, denoted $F(a)$, is defined for all real numbers $a \in (-\infty, \infty)$ as:
>$$F(a) = P(X \le a)$$

Key Properties:
- $0 \le F(a) \le 1$
- As $a \to -\infty$, $F(a) \to 0$
- As $a \to \infty$, $F(a) \to 1$
- $F(a)$ is non-decreasing: if $a_1 \le a_2$, then $F(a_1) \le F(a_2)$

---

#### Constructing the CDF: 2-Value Example

Let $X \in \{0, 1\}$ with $P(X = 0) = \frac{1}{4}$ and $P(X = 1) = \frac{3}{4}$.

Evaluating $F(a) = P(X \le a)$ across the real number line:
- **For $a < 0$ (e.g., $a = -2$):** No possible value of $X$ is $\le a \implies F(a) = 0$.
- **At $a = 0$:** Only $X = 0$ is $\le 0 \implies F(0) = P(X = 0) = \frac{1}{4}$.
- **For $0 \le a < 1$ (e.g., $a = 0.5$):** Only $X = 0$ qualifies $\implies F(a) = \frac{1}{4}$.
- **At $a = 1$:** Both $X = 0$ and $X = 1$ qualify $\implies F(1) = \frac{1}{4} + \frac{3}{4} = 1$.
- **For $a \ge 1$ (e.g., $a = 3$):** All possible values are $\le a \implies F(a) = 1$.

Piecewise form:
$$F(a) = \begin{cases} 0 & a < 0 \\ \frac{1}{4} & 0 \le a < 1 \\ 1 & a \ge 1 \end{cases}$$

---

#### Constructing the CDF: 4-Value Example

Let $X \in \{1, 2, 3, 4\}$ with PMF:  
$P(X = 1) = 0.25, \; P(X = 2) = 0.50, \; P(X = 3) = 0.125, \; P(X = 4) = 0.125$.

Building $F(a)$ across intervals:
- **$a < 1$:** No values qualify $\implies F(a) = 0$
- **$1 \le a < 2$:** Only $X = 1$ qualifies $\implies F(a) = 0.25$
- **$2 \le a < 3$:** $X \in \{1, 2\}$ qualify $\implies F(a) = 0.25 + 0.50 = 0.75$
- **$3 \le a < 4$:** $X \in \{1, 2, 3\}$ qualify $\implies F(a) = 0.75 + 0.125 = 0.875$
- **$a \ge 4$:** All values qualify $\implies F(a) = 0.875 + 0.125 = 1.0$

Piecewise form:
$$F(a) = \begin{cases} 0 & a < 1 \\ 0.25 & 1 \le a < 2 \\ 0.75 & 2 \le a < 3 \\ 0.875 & 3 \le a < 4 \\ 1.0 & a \ge 4 \end{cases}$$

#### The Step Function & Jump-Size Rule

For any discrete random variable, the CDF graph is a **step function** (staircase):
- It is flat in regions between possible values of $X$.
- It jumps upward at each possible value $x_i$.
- **Crucial Rule:** The vertical size of the jump at $x_i$ equals the PMF probability $P(X = x_i)$:
$$\text{Jump at } x_i = F(x_i) - \lim_{x \to x_i^-} F(x) = P(X = x_i)$$

Given a step-function CDF, you can reconstruct the PMF by measuring the height of each step.

---
---

### Practice Problems

#### P1. Validating PMF Tables
Determine whether each table is a valid PMF. If invalid, state why.
- **(a)** $X \in \{1, 2, 3\}$ with probabilities $0.2, 0.5, 0.3$  
  *Solution:* All $\ge 0$ and $0.2 + 0.5 + 0.3 = 1.0 \implies$ **Valid**.
- **(b)** $X \in \{0, 1, 2, 3\}$ with probabilities $0.1, 0.2, 0.3, 0.5$  
  *Solution:* Sum $= 1.1 \ne 1 \implies$ **Invalid** (sum exceeds 1).
- **(c)** $X \in \{1, 2, 3, 4\}$ with probabilities $0.3, -0.2, 0.5, 0.4$  
  *Solution:* Probability $-0.2 < 0 \implies$ **Invalid** (negative probability).
- **(d)** $X \in \{0, 1, 2\}$ with probabilities $0.5, 0.5, 0$  
  *Solution:* All $\ge 0$ and sum $= 1.0 \implies$ **Valid**.

---

#### P2. Solving for an Unknown Constant $k$
A random variable $X$ has PMF $P(X = x) = k \cdot x$ for $x \in \{1, 2, 3, 4, 5\}$.
1. Find $k$.
2. Find $P(X \ge 3)$.
3. Find $P(2 < X \le 4)$.

**Solution:**
1. Sum must equal 1:
   $$k(1) + k(2) + k(3) + k(4) + k(5) = 15k = 1 \implies k = \frac{1}{15}$$
   Full PMF: $P(X = 1) = \frac{1}{15}, P(X = 2) = \frac{2}{15}, P(X = 3) = \frac{3}{15}, P(X = 4) = \frac{4}{15}, P(X = 5) = \frac{5}{15}$.
2. $P(X \ge 3) = P(X = 3) + P(X = 4) + P(X = 5) = \frac{3 + 4 + 5}{15} = \frac{12}{15} = \mathbf{\frac{4}{5}}$
3. $P(2 < X \le 4) = P(X = 3) + P(X = 4) = \frac{3 + 4}{15} = \mathbf{\frac{7}{15}}$

---

#### P3. Reconstructing PMF from a CDF Step Function
A discrete random variable $Z$ has CDF:
$$F(z) = \begin{cases} 0 & z < 2 \\ 0.3 & 2 \le z < 5 \\ 0.7 & 5 \le z < 9 \\ 1.0 & z \ge 9 \end{cases}$$
Find the PMF of $Z$.

**Solution:**
Using the jump-size rule at each discontinuity point:
- Jump at $z = 2$: $0.3 - 0 = \mathbf{0.3} \implies P(Z = 2) = 0.3$
- Jump at $z = 5$: $0.7 - 0.3 = \mathbf{0.4} \implies P(Z = 5) = 0.4$
- Jump at $z = 9$: $1.0 - 0.7 = \mathbf{0.3} \implies P(Z = 9) = 0.3$

Check: $0.3 + 0.4 + 0.3 = 1.0$.

---

#### P4. 4 Coin Tosses: Full PMF & CDF Derivation
A fair coin is tossed 4 times. Let $X = \text{number of heads observed}$.
1. Find total outcomes in sample space.
2. Construct the PMF of $X$.
3. Construct the CDF $F(a)$.
4. Find $P(X \ge 2)$ using the CDF.
5. Identify the distribution shape.

**Solution:**
1. $2^4 = \mathbf{16\text{ outcomes}}$.
2. Number of ways to get $k$ heads out of 4 tosses is $\binom{4}{k}$:
   - $P(X = 0) = \frac{\binom{4}{0}}{16} = \frac{1}{16}$
   - $P(X = 1) = \frac{\binom{4}{1}}{16} = \frac{4}{16}$
   - $P(X = 2) = \frac{\binom{4}{2}}{16} = \frac{6}{16}$
   - $P(X = 3) = \frac{\binom{4}{3}}{16} = \frac{4}{16}$
   - $P(X = 4) = \frac{\binom{4}{4}}{16} = \frac{1}{16}$
3. Cumulative sums:
   $$F(a) = \begin{cases} 0 & a < 0 \\ \frac{1}{16} & 0 \le a < 1 \\ \frac{5}{16} & 1 \le a < 2 \\ \frac{11}{16} & 2 \le a < 3 \\ \frac{15}{16} & 3 \le a < 4 \\ 1 & a \ge 4 \end{cases}$$
4. $P(X \ge 2) = 1 - P(X < 2) = 1 - P(X \le 1) = 1 - F(1) = 1 - \frac{5}{16} = \mathbf{\frac{11}{16}}$.
5. **Symmetric.** Probabilities $\left(\frac{1}{16}, \frac{4}{16}, \frac{6}{16}, \frac{4}{16}, \frac{1}{16}\right)$ mirror perfectly around the center value $X = 2$.

---

#### P5. Independent Production Lines
Line A produces a defective item with probability $0.1$. Line B produces a defective item with probability $0.2$. One item is inspected from each line independently. Let $X = \text{total defective items } \{0, 1, 2\}$.
1. Find the PMF of $X$.
2. Construct the CDF of $X$.
3. Find the probability that at least one defective item is found.

**Solution:**
1. Let $A = \text{Line A defective } (P = 0.1)$, $B = \text{Line B defective } (P = 0.2)$.
   - $P(X = 0) = P(A^c)P(B^c) = (0.9)(0.8) = \mathbf{0.72}$
   - $P(X = 1) = P(A)P(B^c) + P(A^c)P(B) = (0.1)(0.8) + (0.9)(0.2) = 0.08 + 0.18 = \mathbf{0.26}$
   - $P(X = 2) = P(A)P(B) = (0.1)(0.2) = \mathbf{0.02}$
   (Sum check: $0.72 + 0.26 + 0.02 = 1.00$).
2. CDF:
   $$F(a) = \begin{cases} 0 & a < 0 \\ 0.72 & 0 \le a < 1 \\ 0.98 & 1 \le a < 2 \\ 1.00 & a \ge 2 \end{cases}$$
3. $P(X \ge 1) = 1 - P(X = 0) = 1 - 0.72 = \mathbf{0.28}$ (or via CDF: $1 - F(0) = 1 - 0.72 = 0.28$).