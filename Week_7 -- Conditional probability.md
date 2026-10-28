## -->Contingency tables

Contingency tables organize joint occurrences of categorical variables, connecting descriptive frequency counts directly to probability.

### 1. Converting a Contingency Table to Probabilities

Example: Gender × Smartphone Ownership (100 people)

| | Not Owning ($O^c$) | Owning ($O$) | Total |
|---|---|---|---|
| **Female ($F$)** | 10 | 34 | 44 |
| **Male ($M$)** | 14 | 42 | 56 |
| **Total** | 24 | 76 | 100 |

To convert counts into empirical probabilities, divide every cell by the total count ($N = 100$):
- $P(F \cap O^c) = \frac{10}{100} = 0.10$
- $P(F \cap O) = \frac{34}{100} = 0.34$
- $P(M \cap O^c) = \frac{14}{100} = 0.14$
- $P(M \cap O) = \frac{42}{100} = 0.42$

---

### 2. Joint Probabilities vs. Marginal Probabilities

- **Joint Probability:** The chance of two events occurring together. These are the inner cells of the table:
  $$P(F \cap O) = 0.34 \quad (\text{Female AND owns a smartphone})$$

- **Marginal Probability:** The probability of a single event irrespective of other factors. Found along the margins (row or column totals) by summing the disjoint pieces:
  $$P(F) = P(F \cap O) + P(F \cap O^c) = 0.34 + 0.10 = 0.44$$
  
  Marginal values:
  - $P(F) = 0.44$
  - $P(M) = 0.56$
  - $P(O) = 0.76$
  - $P(O^c) = 0.24$

---

### 3. Conditional Probability: The Intuition of Shrinking Sample Space

**The Core Concept:**
When you are given new information that an event $B$ has occurred, any outcome outside of $B$ becomes impossible. Your **sample space shrinks** from the original universe down exclusively to event $B$.

**Building the Formula:**
Ask: "Among female buyers, what is the chance someone owns a phone?"
- Original sample space: 100 people.
- Condition given: The person is female. The sample space collapses from 100 down to the 44 females.
- Out of these 44 females, 34 own a phone:
  $$P(O \mid F) = \frac{34}{44}$$

Notice what happens mathematically when dividing by the grand total (100):
$$
\frac{34}{44} = \frac{34/100}{44/100} = \frac{P(F \cap O)}{P(F)}
$$

>**Conditional Probability Formula:**
>The probability of event $A$ occurring given that event $B$ has already occurred:
>$$
>P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0
>$$
>
>- Read "$|$" as **"given"**.
>- $P(A \cap B)$ = probability of both occurring (overlap).
>- $P(B)$ = probability of the conditioning event (new restricted sample space).
>- Dividing by $P(B)$ renormalizes the shrunk world so probabilities inside it sum to 1.

**Reversing the Condition (Conditioning the other way):**  
"Among non-owners, what is the chance the person is male?"
- Shrunk universe = 24 non-owners.
- Males within this universe = 14.
$$
P(M \mid O^c) = \frac{P(M \cap O^c)}{P(O^c)} = \frac{0.14}{0.24} = \frac{14}{24} \approx 0.583
$$

*Takeaway:* Row relative frequencies ($P(\text{column} \mid \text{row})$) and column relative frequencies ($P(\text{row} \mid \text{column})$) are conditional probabilities in disguise.

---
### Practice Problems: Contingency Tables

**Q1.** Using the smartphone table:  
(a) Find $P(O \mid M)$  
(b) Find $P(F \mid O)$  
(c) Are (a) and (b) equal?  
**Solution:**  
(a) $P(O \mid M) = \frac{P(M \cap O)}{P(M)} = \frac{0.42}{0.56} = \mathbf{0.75}$  
(b) $P(F \mid O) = \frac{P(F \cap O)}{P(O)} = \frac{0.34}{0.76} \approx \mathbf{0.447}$  
(c) No. $P(A \mid B) \neq P(B \mid A)$ because they condition on completely different sample spaces.

**Q2.** A factory records shifts and defects:
- Day shift: 5 defective, 95 good (Total = 100)
- Night shift: 15 defective, 85 good (Total = 100)  
Total defective = 20; Total output = 200.  
(a) Find $P(\text{Defective} \mid \text{Day})$  
(b) Find $P(\text{Day} \mid \text{Defective})$  
**Solution:**  
(a) Shrunk universe = 100 day items:  
$$P(\text{Defective} \mid \text{Day}) = \frac{5}{100} = \mathbf{0.05}$$  
(b) Shrunk universe = 20 defective items:  
$$P(\text{Day} \mid \text{Defective}) = \frac{5}{20} = \mathbf{0.25}$$

**Q3.** In a class of 50 students: 30 study Physics, 20 study Chemistry, and 10 study both.  
(a) Find $P(\text{Chemistry} \mid \text{Physics})$  
(b) Find $P(\text{Physics} \mid \text{Chemistry})$  
**Solution:**  
$P(\text{Phys}) = \frac{30}{50} = 0.6$, $P(\text{Chem}) = \frac{20}{50} = 0.4$, $P(\text{Both}) = \frac{10}{50} = 0.2$.  
(a) $P(\text{Chem} \mid \text{Phys}) = \frac{0.2}{0.6} = \frac{10}{30} = \mathbf{\frac{1}{3} \approx 0.333}$  
(b) $P(\text{Phys} \mid \text{Chem}) = \frac{0.2}{0.4} = \frac{10}{20} = \mathbf{0.5}$

---
---
## -->The Multiplication Rule

### Derivation from Scratch

Start with the conditional probability formula:
$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$
Multiply both sides by $P(B)$ to solve for the joint probability:

>**The Multiplication Rule:**
>$$
>P(A \cap B) = P(B) \times P(A \mid B) \quad \text{or} \quad P(A \cap B) = P(A) \times P(B \mid A)
>$$

**Why use this?**  
In sequential real-world problems (especially "without replacement"), counting the joint outcomes directly is difficult. It is much easier to evaluate stage 1 unconditionally, then evaluate stage 2 conditionally, and multiply them.

---

### Step-by-Step Mechanical Detail: Without Replacement

**Problem:** A class has 40 students: 23 male, 17 female. Pick 2 students one after another without replacement. What is the chance the 1st is female AND the 2nd is male?

- **Stage 1 (First pick female):**  
  Total = 40, females = 17.  
  $$P(\text{1st Female}) = \frac{17}{40}$$
- **Stage 2 (Second pick male, given first was female):**  
  One female was removed. Total pool drops to $40 - 1 = 39$. But no males were removed, so male count remains 23.  
  $$P(\text{2nd Male} \mid \text{1st Female}) = \frac{23}{39}$$
- **Combine:**
  $$
  P(\text{1st Female } \cap \text{ 2nd Male}) = \frac{17}{40} \times \frac{23}{39} = \frac{391}{1560} \approx \mathbf{0.251}
  $$

*Key takeaway:* In "without replacement" problems, the denominator shrinks by 1 at each draw. The numerator only shrinks if an item from that specific category was drawn.

---

### Chaining Events: The General Multiplication Rule

For $n$ sequential events:
$$
P(E_1 \cap E_2 \cap \dots \cap E_n) = P(E_1) \times P(E_2 \mid E_1) \times P(E_3 \mid E_1 \cap E_2) \dots P(E_n \mid E_1 \cap \dots \cap E_{n-1})
$$

#### The 4 Aces in 4 Piles Problem (Walkthrough)

**Problem:** 52 cards are dealt into 4 equal piles of 13 cards. What is the probability that each pile contains exactly one Ace?

Break into stages, placing one ace at a time:
- **Ace 1 (Spades):** Placed into any pile. No constraint $\to P = 1$.
- **Ace 2 (Hearts):** Must avoid Ace 1's pile. That pile already has 1 card and needs 12 more out of the remaining 51 cards.  
  Chance of landing in that same pile = $\frac{12}{51}$.  
  Chance of landing in a *different* pile = $1 - \frac{12}{51} = \frac{39}{51}$.
- **Ace 3 (Diamonds):** Must avoid both piles containing Ace 1 and Ace 2. Those two piles need $12 + 12 = 24$ cards out of the 50 cards remaining.  
  Chance of landing in an *empty* pile = $1 - \frac{24}{50} = \frac{26}{50}$.
- **Ace 4 (Clubs):** Must land in the only remaining pile without an ace. The first three piles need $12 \times 3 = 36$ cards out of the 49 cards remaining.  
  Chance of landing in the 4th pile = $1 - \frac{36}{49} = \frac{13}{49}$.

Multiply stages together:
$$
P = 1 \times \frac{39}{51} \times \frac{26}{50} \times \frac{13}{49} \approx \mathbf{0.105}
$$

---
### Practice Problems: Multiplication Rule

**Q1.** Two fair dice are rolled. Given the first die shows a 3, find $P(\text{sum} = 8)$.  
**Solution:**  
Restricted outcomes (first die fixed at 3): $(3,1), (3,2), (3,3), (3,4), (3,5), (3,6) \to 6$ outcomes.  
Only $(3,5)$ gives sum 8.  
$$P = \mathbf{\frac{1}{6}}$$

**Q2.** A bag contains 6 red and 4 blue balls. Draw 2 without replacement.  
(a) Find $P(\text{1st Red } \cap \text{ 2nd Blue})$  
(b) Find $P(\text{both Red})$  
**Solution:**  
(a) $P = \frac{6}{10} \times \frac{4}{9} = \frac{24}{90} = \mathbf{\frac{4}{15} \approx 0.267}$  
(b) $P = \frac{6}{10} \times \frac{5}{9} = \frac{30}{90} = \mathbf{\frac{1}{3} \approx 0.333}$

**Q3.** Draw 2 cards from a standard deck without replacement. Find $P(\text{both Hearts})$.  
**Solution:**  
$$P = \frac{13}{52} \times \frac{12}{51} = \frac{156}{2652} = \mathbf{\frac{1}{17} \approx 0.0588}$$

**Q4.** Draw 3 cards without replacement. Find $P(\text{all three are Kings})$.  
**Solution:**  
$$P = \frac{4}{52} \times \frac{3}{51} \times \frac{2}{50} = \frac{24}{132{,}600} \approx \mathbf{0.000181}$$

**Q5.** A committee of 4 is selected without replacement from 8 men and 6 women. Find $P(\text{all 4 are men})$.  
**Solution:**  
$$P = \frac{8}{14} \times \frac{7}{13} \times \frac{6}{12} \times \frac{5}{11} = \frac{1680}{24{,}024} \approx \mathbf{0.0699}$$

---
---
## -->Independent Events

### Concept and Formal Definition

Two events $E$ and $F$ are **independent** if the occurrence of $F$ does not change the probability of $E$:
$$
P(E \mid F) = P(E)
$$

Substitute this into the multiplication rule $P(E \cap F) = P(F) \times P(E \mid F)$:

>**The Practical Independence Test:**
>$$
>E \text{ and } F \text{ are independent} \iff P(E \cap F) = P(E) \times P(F)
>$$

To test independence in any problem:
1. Compute $P(E \cap F)$.
2. Compute $P(E) \times P(F)$.
3. Compare: if they are identical, the events are independent; if they differ, they are dependent.

---

### Crucial Distinctions

#### 1. Mutually Exclusive vs. Independent (Common Pitfall)
- **Mutually Exclusive:** $E \cap F = \emptyset \implies P(E \cap F) = 0$. The two events cannot happen together.
- **Independent:** $P(E \cap F) = P(E) \times P(F)$. One happening gives zero information about the other.
- *Rule:* If two events with non-zero probabilities are mutually exclusive, they are automatically **dependent**. If $F$ occurs, $P(E \mid F) = 0 \neq P(E)$.

#### 2. Independence of Complements
If $E$ and $F$ are independent, then $E$ and $F^c$ are also independent:
$$
P(E \cap F^c) = P(E) \times P(F^c) = P(E)(1 - P(F))
$$

#### 3. Independence of 3 Events ($E, F, G$)
Pairwise independence is **not enough**. For three events to be mutually independent, **all four** conditions must hold:
1. $P(E \cap F) = P(E)P(F)$
2. $P(E \cap G) = P(E)P(G)$
3. $P(F \cap G) = P(F)P(G)$
4. $P(E \cap F \cap G) = P(E)P(F)P(G)$

---
### Practice Problems: Independence

**Q1 (Dice Test).** Roll two dice. Let $E = \text{"first die is 3"}$, $F = \text{"sum is 8"}$, $G = \text{"sum is 7"}$.  
(a) Check if $E$ and $F$ are independent.  
(b) Check if $E$ and $G$ are independent.  
**Solution:**  
$P(E) = \frac{6}{36} = \frac{1}{6}$  
(a) Sum = 8 pairs: $(2,6),(3,5),(4,4),(5,3),(6,2) \to P(F) = \frac{5}{36}$.  
$E \cap F = \{(3,5)\} \to P(E \cap F) = \frac{1}{36}$.  
Check: $P(E) \times P(F) = \frac{1}{6} \times \frac{5}{36} = \frac{5}{216} \neq \frac{1}{36}$.  
$\implies$ **Dependent (Not independent).**  
(b) Sum = 7 pairs: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1) \to P(G) = \frac{6}{36} = \frac{1}{6}$.  
$E \cap G = \{(3,4)\} \to P(E \cap G) = \frac{1}{36}$.  
Check: $P(E) \times P(G) = \frac{1}{6} \times \frac{1}{6} = \frac{1}{36} = P(E \cap G)$.  
$\implies$ **Independent.**

**Q2 (Card Deck Test).** Draw 1 card from 52.  
(a) $E_1 = \text{Face card}$ (12 cards), $E_2 = \text{King}$ (4 cards).  
(b) $E_2 = \text{King}$ (4 cards), $E_3 = \text{Heart}$ (13 cards).  
**Solution:**  
(a) $P(E_1) = \frac{12}{52}$, $P(E_2) = \frac{4}{52}$. Every King is a Face card $\to P(E_1 \cap E_2) = \frac{4}{52}$.  
Check: $P(E_1)P(E_2) = \frac{12}{52} \times \frac{4}{52} = \frac{48}{2704} \approx 0.0178 \neq \frac{4}{52} \approx 0.0769$.  
$\implies$ **Dependent.**  
(b) $P(E_2) = \frac{4}{52}$, $P(E_3) = \frac{13}{52}$. $E_2 \cap E_3 = \text{King of Hearts} \to P(E_2 \cap E_3) = \frac{1}{52}$.  
Check: $P(E_2)P(E_3) = \frac{4}{52} \times \frac{13}{52} = \frac{52}{2704} = \frac{1}{52} = P(E_2 \cap E_3)$.  
$\implies$ **Independent.**

**Q3 (Algebraic Applications).** Let $P(A) = 0.4$ and $P(B) = 0.5$ be independent.  
Find $P(A \cap B)$, $P(A \cup B)$, and $P(A \cap B^c)$.  
**Solution:**  
- $P(A \cap B) = P(A)P(B) = 0.4 \times 0.5 = \mathbf{0.20}$  
- $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.4 + 0.5 - 0.20 = \mathbf{0.70}$  
- Since $A$ and $B$ are independent, $A$ and $B^c$ are independent:  
  $P(A \cap B^c) = P(A) \times P(B^c) = 0.4 \times (1 - 0.5) = \mathbf{0.20}$

**Q4 (The Pairwise vs Mutual Counterexample).**  
Roll two dice. $E = \text{"sum 7"}$, $F = \text{"first die 4"}$, $G = \text{"second die 3"}$.  
$P(E) = \frac{1}{6}$, $P(F) = \frac{1}{6}$, $P(G) = \frac{1}{6}$.  
- Pairwise: $P(E \cap F) = \frac{1}{36} = P(E)P(F)$; $P(E \cap G) = \frac{1}{36}$; $P(F \cap G) = \frac{1}{36}$. (All pairwise conditions hold).  
- Triplet: $E \cap F \cap G = \{(4,3)\}$ because $(4,3)$ automatically sums to 7.  
  $P(E \cap F \cap G) = \frac{1}{36}$.  
  Product: $P(E)P(F)P(G) = \frac{1}{6} \times \frac{1}{6} \times \frac{1}{6} = \frac{1}{216} \neq \frac{1}{36}$.  
$\implies$ $E, F, G$ are pairwise independent, but **not mutually independent**.

---
---
## -->Law of Total Probability & Bayes' Rule

### Law of Total Probability

If event $E$ can occur across $k$ mutually exclusive and exhaustive cases $F_1, F_2, \dots, F_k$ (a partition of the sample space):

$$
P(E) = \sum_{i=1}^k P(E \cap F_i) = \sum_{i=1}^k P(E \mid F_i)P(F_i)
$$

For a simple two-piece partition ($F$ and $F^c$):
$$
P(E) = P(E \mid F)P(F) + P(E \mid F^c)P(F^c)
$$

*Intuition:* To find the total probability of an effect, sum up the probability of reaching that effect through every possible cause.

---

### Bayes' Theorem: Reversing the Conditional Arrow

While conditional probability calculates **Effect given Cause** ($P(\text{Evidence} \mid \text{Hypothesis})$), real-world inference requires finding **Cause given Effect** ($P(\text{Hypothesis} \mid \text{Evidence})$).

>**Bayes' Formula:**
>$$
>P(F_j \mid E) = \frac{P(E \mid F_j)P(F_j)}{P(E)} = \frac{P(E \mid F_j)P(F_j)}{\sum_{i=1}^k P(E \mid F_i)P(F_i)}
>$$
>
>- **Prior $P(F_j)$:** Initial belief before seeing evidence.
>- **Likelihood $P(E \mid F_j)$:** Probability of evidence under hypothesis $F_j$.
>- **Evidence $P(E)$:** Total probability of the observed outcome across all paths.
>- **Posterior $P(F_j \mid E)$:** Updated belief after observing evidence.

---
### Practice Problems: Total Probability & Bayes'

**Q1 (Insurance Risk).**  
An insurance company classifies drivers as accident-prone ($F$) or normal ($F^c$).  
$P(F) = 0.20 \implies P(F^c) = 0.80$.  
$P(\text{Accident} \mid F) = 0.10$, $P(\text{Accident} \mid F^c) = 0.05$.  
(a) Find the overall probability a policyholder has an accident.  
(b) Given a policyholder had an accident, find the probability they are accident-prone.  
**Solution:**  
(a) By Law of Total Probability:  
$$
P(\text{Acc}) = (0.10)(0.20) + (0.05)(0.80) = 0.02 + 0.04 = \mathbf{0.06}
$$  
(b) By Bayes' Theorem:  
$$
P(F \mid \text{Acc}) = \frac{P(\text{Acc} \mid F)P(F)}{P(\text{Acc})} = \frac{0.02}{0.06} = \mathbf{\frac{1}{3} \approx 0.333}
$$  
*Insight:* Unconditional risk was 20%. Having an accident updates our belief to 33.3%.

**Q2 (Factory Production).**  
Factories A, B, and C make 50%, 30%, and 20% of total items.  
Defect rates: A = 2%, B = 3%, C = 5%.  
(a) Find overall probability an item is defective.  
(b) If a randomly picked item is defective, find the probability it came from Factory C.  
**Solution:**  
(a) Total Probability:  
$$
P(D) = (0.02)(0.50) + (0.03)(0.30) + (0.05)(0.20) = 0.01 + 0.009 + 0.01 = \mathbf{0.029}
$$  
(b) Bayes' Theorem:  
$$
P(C \mid D) = \frac{P(D \mid C)P(C)}{P(D)} = \frac{(0.05)(0.20)}{0.029} = \frac{0.01}{0.029} \approx \mathbf{0.345 \ (34.5\%)}
$$

**Q3 (Medical Diagnostic Paradox).**  
A disease affects 1% of the population: $P(D) = 0.01 \implies P(D^c) = 0.99$.  
Test sensitivity (true positive): $P(+ \mid D) = 0.95$.  
False positive rate: $P(+ \mid D^c) = 0.10$.  
A person tests positive. Find $P(D \mid +)$.  
**Solution:**  
1. Find total probability of testing positive:  
$$
P(+) = P(+ \mid D)P(D) + P(+ \mid D^c)P(D^c) = (0.95)(0.01) + (0.10)(0.99) = 0.0095 + 0.099 = 0.1085
$$  
2. Apply Bayes' Theorem:  
$$
P(D \mid +) = \frac{P(+ \mid D)P(D)}{P(+)} = \frac{0.0095}{0.1085} \approx \mathbf{0.0876 \ (8.76\%)}
$$  
*The Paradox Explained:* Even with a 95% accurate test, a positive result only yields an ~8.76% chance of having the disease. Because the disease is rare, false positives from the large healthy pool ($99\%$) outnumber true positives from the small diseased pool ($1\%$).