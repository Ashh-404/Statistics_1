
### -->Basic principles of counting

Everything up to now was descriptive statistics —There was no guessing involved.
##### -> The Addition Rule of Counting

Example : A gift card lets you buy **either** a shirt **or** a pant (not both). You have 4 shirt choices (yellow, blue, green, red) and 3 pant choices (black, blue, brown).

**Question:** How many different ways can you use the card?
Reasoning: Since it's "shirt OR pant" — these are **mutually exclusive** choices; picking one rules out the other entirely. So you simply **add** the number of options: 4 (shirts) + 3 (pants) = 7 total ways.

>**Addition Rule:** If action A can occur in n₁ ways, and action B can occur in n₂ ways, and **you can only do one or the other (not both)**, then the total number of ways **A OR B** can happen is:
$$  
n_1+n_2  
$$​

 When the actions are alternatives to each other, exclusive of one another, you **add**.

#### -> The Multiplication Rule of Counting

**Now change the scenario:** The card instead lets you buy **1 shirt AND 1 pant together** 

**Question:** How many different shirt-pant combinations are possible?
Reasoning: For **each** of the 4 shirts, you can pair it with **any** of the 3 pants. So:
- Yellow shirt → 3 possible pants 
- Blue shirt → 3 possible pants
- Green shirt → 3 possible pants
- Red shirt → 3 possible pants
Total = 3+3+3+3 = 4×3 = **12 combinations**.

Because now the two choices are independent and combined together — every choice of shirt can be freely paired with every choice of pant. This is naturally visualized with a **tree diagram**: 4 branches for shirts, and off of _each_ branch, 3 further branches for pants — giving 4×3 = 12 total end-points (leaves) of the tree.

Extending to 3 actions — adding shoes: Now suppose you also pick 1 pair of shoes from 2 options (black/brown). Every one of the 12 shirt-pant pairs can now be combined with either shoe color:  
12 pairs × 2 shoe choices = 24 total combinations.

>**Multiplication Rule:** If action A can occur in n₁ ways, action B can occur in n₂ ways, and both actions happen together (in sequence/combination), then the total number of ways A AND B can happen is:$$  
n_1 \times n_2  
$$

This extends naturally to any number of action
when actions are combined/happen together (not alternatives), you **multiply**.


**Problem:** A website requires a 6-character password: first 2 characters are letters (A–Z), next 4 characters are digits (0–9).

Case A: Repetition Allowed
- Blank 1 (letter): 26 choices
- Blank 2 (letter): 26 choices (repetition allowed, so still all 26 available)
- Blank 3 (digit): 10 choices
- Blank 4 (digit): 10 choices
- Blank 5 (digit): 10 choices
- Blank 6 (digit): 10 choices
Since all 6 positions are filled together ("AND" situation) , you **multiply**:
26×26×10×10×10×10=6,760,000 possible codes

Case B: No Repetition Allowed
- Blank 1 (letter): 26 choices
- Blank 2 (letter): only 25 left (one letter already used)
- Blank 3 (digit): 10 choices
- Blank 4 (digit): only 9 left
- Blank 5 (digit): only 8 left
- Blank 6 (digit): only 7 left
26×25×10×9×8×7=3,276,000 possible codes

### -->Factorials

Setup: 8 distinct people run a 100m race. No ties, everyone finishes in some order.
Question: How many different possible finishing orders are there?
- **Position 1 (1st place):** any of the 8 runners could finish first → 8 choices
- **Position 2:** whoever won 1st is no longer available → 7 remaining choices
- **Position 3:** 6 remaining choices
- **Position 4:** 5 remaining choices
- **Position 5:** 4 remaining choices
- **Position 6:** 3 remaining choices
- **Position 7:** 2 remaining choices
- **Position 8:** only 1 person left → 1 choice
Since all 8 positions get filled together ( an "AND" situation ), you multiply 8×7×6×5×4×3×2×1

Definition: For a positive integer n, **n! ("n factorial")** is the product of all positive integers from 1 up to n : n!=n×(n−1)×(n−2)×⋯×2×1

---
---
## -->Permutations: distinct objects

**Definition:** A permutation is an ordered arrangement of all or some of n objects (assumed distinct, unless stated otherwise).
Three key words to notice: **ordered** (sequence matters — AB is different from BA), **arrangement** (you're placing things in specific positions), **n objects** (a fixed pool you're drawing from).

Example: Arrange A, B, C in 3 boxes (all 3 at a time, no repetition).
Box 1: 3 choices (A, B, or C)  
Box 2: 2 choices remaining (whichever wasn't used)  
Box 3: 1 choice remaining
Total = 3×2×1 = **6** — matches listing them out: ABC, ACB, BAC, BCA, CAB, CBA.

>**General pattern — choosing r objects from n distinct objects, no repetition**
$$  
{}_nP_r = \frac{n!}{(n-r)!}  
$$​

This is **the permutation formula** — the number of ways to arrange r objects chosen from n distinct objects, order matters, no repetition.

- **ₙP₀ = n!/n! = 1** — exactly one way to arrange "zero objects" (the empty arrangement).
- **ₙP₁ = n!/(n−1)! = n** — choosing 1 object from n has exactly n ways.
- **ₙPₙ = n!/0! = n!/1 = n!** — arranging _all_ n distinct objects in order gives n! arrangements, 

##### Applications

**Application 1 : 8 people, choose a Chairman and Vice-Chairman (distinct roles → order matters, no repetition since one person can't hold both).  
n=8, r=2 → ₈P₂ = 8!/6! = 8×7 = 56 ways

**Application 2 — 4-digit codes from digits {1,2,3,4,5}, no repeated digits:**  
n=5, r=4 → ₅P₄ = 5!/1! = 5×4×3×2 = 120 ways

**Application 3 — Same, but only even numbers (must end in 2 or 4):**  
Fix the last digit first (2 choices: ends in 2, or ends in 4). For each choice, the remaining 3 positions are filled from the remaining 4 digits: ₄P₃ = 4!/1! = 24.  
Total = 2 × 24 = 48 ways

Application 4 — 6 people, 10 cinema seats, sit anywhere:
n=10, r=6 → ₁₀P₆ = 10!/4! = 10×9×8×7×6×5 = 151,200 ways

Application 5 — Same, but the 4 empty seats must all be together (as one block):
Treat the 4 empty seats as one single unit, so effectively you're arranging 6 people + 1 "empty block" = 7 distinct objects into 7 positions.  
n=7, r=6 (6 people fill 6 of these positions)... 7 total objects (6 people + 1 block), arranged in a row → this becomes ₇P₆ = 7!/1! = 5,040 ways.
(whenever a constraint says "these items must stay together," bundle them into a single unit)

##### -> Permutations WITH Repetition Allowed
**Formula:** If you're choosing r objects from n distinct objects, **with** repetition allowed:
$$  
n^r  
$$
Why: Every one of the r positions independently has all n choices available 
- n=3 (A,B,C), r=3, repetition allowed: 3³ = **27** ✓
- n=3, r=2, repetition allowed: 3² = **9** ✓ 
#### -> Practice Problems — Permutations

**P1.** How many ways can 5 different books be arranged on a shelf?
5! = **120**

**P2.** A password must be exactly 4 characters long, chosen from the 26 letters of the alphabet, with no letter repeated. How many such passwords are possible?  
₂₆P₄ = 26!/22! = 26×25×24×23 = 358,800

**P3.** From a class of 12 students, a teacher wants to select a class president, vice-president, and secretary (three distinct roles). How many ways can this be done?
₁₂P₃ = 12!/9! = 12×11×10 = 1,320

P7. 8 runners compete in a race. How many possible ways can 1st, 2nd, and 3rd place (medal positions) be awarded, assuming no ties?
₈P₃ = 8!/5! = 8×7×6 = 336

P8. A row has 8 seats. 5 friends want to sit together, with the remaining 3 seats occupied by other people not part of the friend group. you're only counting arrangements of the "friend block" position and the friends' internal order. Compute the total count.

Arranging 4 units (1 friend-block + 3 individual seats) in a row: 4! = 24 ways to position the block among the units. Within the block, the 5 friends can be arranged internally in 5! = 120 ways. Total = 24 × 120 = 2,880

---
### -> Permutations:  not distinct objects

##### 1. Permutations With Non-Distinct (Repeated) Objects

The problem: Arrange the letters of "DATA" — but two letters are identical (A appears twice), so it's not immediately clear how many _genuinely distinct_ arrangements exist.
The trick — temporarily treat identical objects as distinct, then correct for overcounting:

Label the two A's as A₁ and A₂ (pretending they're distinguishable). Now you have 4 fully distinct objects: D, A₁, T, A₂. Total arrangements = 4! = 24.
But many of these "24" arrangements are actually duplicates once you realize A₁ and A₂ are really the same letter. 
How much overcounting happened? For every real arrangement, there are exactly **2! = 2** ways to have labeled the two A's (A₁ before A₂, or A₂ before A₁) — so every true, distinct arrangement got counted twice. Divide out this overcounting:
$$  
\frac{4!}{2!} = \frac{24}{2} = 12  
$$

>General formula: For n objects where p of them are identical (of one kind) and the rest distinct:
$$  
\frac{n!}{p!}  
$$


"STATISTICS" has 10 letters total, with: S×3, T×3, A×1, I×2, C×1.
$$  
\frac{n!}{p_1! , p_2! , \dots , p_k!}  
$$

$$  
\begin{aligned}  
\frac{10!}{3! \times 3! \times 1! \times 2! \times 1!}  
&= \frac{3{,}628{,}800}{6 \times 6 \times 1 \times 2 \times 1} \  
&= \frac{3{,}628{,}800}{72} \  
&= 50{,}400  
\end{aligned}  
$$


#### 2. Circular Permutations

**The problem:** Arranging n distinct objects isn't always in a straight line — sometimes it's around a circle , and this changes the counting logic.

Why linear counting overcounts here: In a line, ABCD is a genuinely different arrangement from BCDA. But in a **circle**, ABCD and BCDA describe the exact same physical seating — everyone has the same neighbors on each side, just described starting from a different point. What matters in a circular arrangement is relative position , not an absolute "first position."

**The fix:** Since rotating the whole circle doesn't create a new arrangement, you can fix one object's position — this eliminates the redundant "rotations of the same arrangement" from your count. The remaining (n−1) objects can then be arranged freely around the rest of the circle:
$$  
(n-1)!  
$$

Worked example — 4 people around a table: (4−1)! = 3! = 6 distinct circular arrangements 

##### -> A further subtlety — clockwise vs. anticlockwise:

If a clockwise arrangement (A,B,C,D reading clockwise) is considered different from its mirror image (A,B,C,D reading anticlockwise — which is really A,D,C,B clockwise), then the formula stays as **(n−1)!**.

But if clockwise and anticlockwise arrangements are considered the same (i.e., flipping the table over, or viewing from the other side, doesn't create a new seating), then each true distinct arrangement has been counted twice (once for each direction), so you divide by 2 more:
$$  
\frac{(n-1)!}{2}  
$$​
Practically: if you're seating people around a table , clockwise ≠ anticlockwise, use (n−1)!.
But if you're arranging beads on a necklace or charms on a bracelet, clockwise = anticlockwise

---
---
### -> Combinations and its applications

**Definition:** A combination is a selection of objects where order does not matter — you're just choosing a group, not arranging it.

Example: Choose 2 students from {A, B, C}. The possible groups are: AB, AC, BC — just **3** ways. Notice: "AB" and "BA" represent the _same selection_ (the same two people chosen), so they're not counted separately
The key relationship: Every single combination (a group of r objects) can internally be rearranged in r! ways to produce distinct permutations.

Example: With n=3, r=2: You know ₃P₂ = 6 , But there are only 3 distinct combinations, and each one expands into 2! = 2 permutations (AB→{AB,BA}, AC→{AC,CA}, BC→{BC,CB}).

> So: **Number of combinations × r! = Number of permutations**
$$  
\binom{n}{r}\times r! = {}_nP_r  
$$​

Solving for the combination count:
$$  
\binom{n}{r} = \frac{{}_nP_r}{r!} = \frac{n!}{r!(n-r)!}  
$$

This is written as **ₙCᵣ**  or **"n choose r"** — also called the **binomial coefficient**.

1. Identity 1: ₙCᵣ = ₙCₙ₋ᵣ
2. Identity 2: ₙCₙ = 1 and ₙC₀ = 1
3. Identity 3 (Pascal's Rule): ₙCᵣ = ₙ₋₁Cᵣ₋₁ + ₙ₋₁Cᵣ

Intuition ( example, n=5, r=3, objects A,B,C,D,E):Focus on one specific object, say A. Every group of 3 either includes A or excludes A — these two cases are mutually exclusive and cover everything:
- **Includes A:** you've already placed A, so you need to choose 2 more from the remaining 4 → ₄C₂
- **Excludes A:** you need to choose all 3 from the remaining 4 → ₄C₃
Total: ₅C₃ = ₄C₂ + ₄C₃). 

##### -> Applications

Application 1 — Exam question selection: 12 questions total (7 in Part 1, 5 in Part 2). Student must attempt exactly 8, with at least 3 from each part.

Since exactly 8 must be chosen with at least 3 from each, the valid splits are (3,5), (4,4), (5,3) 
$$  
\begin{aligned}  
&\binom{7}{3}\binom{5}{5}+\binom{7}{4}\binom{5}{4}+\binom{7}{5}\binom{5}{3} \  
&= 35(1)+35(5)+21(10) \  
&= 35+175+210 \  
&= \mathbf{420}  
\end{aligned}  
$$


**Application 2 — Playing cards (52 total, 4 suits × 13 ranks):**
(a) Choose any 4 cards (no restriction): ₅₂C₄ = 270,725
(b) Choose 4 cards, all the same suit: First pick which suit (4C1 = 4 ways), then pick 4 cards from that suit's 13 (₁₃C₄ = 715 ways):  4×715=2,8604 
(c) Choose 4 cards, all the same color (26 red or 26 black): Pick a color (2C1=2), then 4 from those 26 (₂₆C₄):  $$  
2 \times \binom{26}{4} = 2 \times 14{,}950 = \mathbf{29{,}900}  
$$
Application 3 — Cricket team selection: 17 available players, of whom exactly 5 can bowl. Need to select 11 players with exactly 4 bowlers.
$$  
\binom{5}{4} \times \binom{12}{7} = 5 \times 792 = \mathbf{3{,}960}  
$$
4 bowlers chosen from the 5 available, and the remaining 7 team spots filled from the 12

##### -> Distinguishing Permutation vs. Combination
The single diagnostic question to always ask: "Does the order/arrangement/role matter here, or am I just picking a group?"
- **Order matters → Permutation**
- **Order doesn't matter → Combination**

**Pair 1 — Race medals:**
- "How many ways to award gold, silver, bronze to 3 of 8 runners?"→ Order matters  → Permutation: ₈P₃ = 8!/5! = 8×7×6 = 33
- How many ways to choose the top 3 runners to advance to the next round? (no distinction between them once chosen) → Order doesn't matter → Combination: ₈C₃ = 8!/(3!5!) = 56

**Pair 2 — Class leadership:**
- Choose 2 class representatives(no distinct roles) → **Combination**: ₄₀C₂ = **780**
- Choose a captain AND a vice-captain (distinct roles ) → **Permutation**: ₄₀P₂ = **1,560**

---
### Practice Problems

**Q1 (Addition vs Multiplication Rule).**  
A student can join exactly one club: either a Sports club (4 options) or an Arts club (3 options), but not both. Separately, for a school event, the student must pick one T-shirt (5 colors) AND one cap (2 colors) together.  
(a) How many ways can the student pick a club?  
(b) How many ways can the student pick a T-shirt-and-cap combo?
**Solution:**  
(a) "Sports OR Arts" → mutually exclusive → **add**: 4+3 = **7 ways**  
(b) "T-shirt AND cap" → combined together → **multiply**: 5×2 = **10 ways**

Q2 : A teacher must select a class monitor, assistant monitor, and cleanliness in-charge (3 distinct roles) from a class of 15 students, with no student holding two roles.
**Solution:**  
Order/roles matter → permutation. n=15, r=3  
₁₅P₃ = 15!/12! = 15×14×13 = **2,730 ways**

Q3 : A padlock uses a 3-digit code, digits from 0–9, and digits can repeat. How many codes are possible?
Solution:
Repetition allowed → nʳ = 10³ = **1,000 codes**

Q4 : In how many ways can 5 people be seated around a circular table, if clockwise and anticlockwise arrangements are considered different?
**Solution:**  
(n−1)! = 4! = **24 ways**

Q5 : From a standard 52-card deck, how many ways can you draw 3 cards that are all spades 
Solution:
$$  
\binom{13}{3} = \frac{13!}{3!10!} = \mathbf{286 \text{ ways}}  
$$

Q6 : A committee of 5 must be formed from 6 men and 4 women, with exactly 3 men and 2 women on the committee.
Solution:
$$  
\binom{6}{3} \times \binom{4}{2} = 20 \times 6 = \mathbf{120 \text{ ways}}  
$$


