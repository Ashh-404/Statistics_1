
Descriptive statistics (Weeks 1–4) worked with data you already had — no guessing involved.
But the ultimate goal of statistics is inference — using a sample to draw conclusions about a larger population you haven't fully measured. 
Probability is the mathematical toolkit for quantifying and reasoning about that uncertainty..


-> Experiment : An experiment is any process that produces an observation or outcome.
-> Random Experiment : It is an experiment whose outcome cannot be predicted with certainty — even though you may know all the _possible_ outcomes in advance.

Example 1 — Guessing a 4-option MCQ answer
Example 2 — Order of finish in a 6-person race:
Example 3 — Tossing two coins

Random experiments can have outcomes that are finite and discrete, infinite and discrete, or infinite and continuous...

-> Sample Space : denoted **S**, or sometimes **Ω** "omega"  is the set of all basic outcomes of a random experiment.
Key property — basic outcomes must be mutually exclusive: Only one of them can occur at a time.


-> Outcome : An **outcome** is the result of a random experiment.
Examples: If you toss a coin:  Head (H) or Tail (T)
These are the possible outcomes.

-> Event : An **event** is a subset of the sample space.
Example: Roll a die.
Event A = Getting an even number , A={2,4,6}

-> Simple Event : A **simple event** contains only one outcome.
-> Compound Event : A **compound event** contains more than one outcome.

-> Union of Events (A ∪ B) :The **union** means that either event A or event B or both occur.
Example:
A = Even numbers , A={2,4,6}
B = Prime numbers ,B={2,3,5}
Then, A∪B={2,3,4,5,6}

-> Intersection of Events (A ∩ B) : Means that **both events occur at the same time.**
Example:
A={2,4,6} B={2,3,5}
Then, A∩B={2}

##### -> Mutually Exclusive Events
Two events are **mutually exclusive** if they cannot happen at the same time.

Example:Toss a coin.
A = Getting a head
B = Getting a tail
A∩B=∅

-> Complement of an Event (A') : contains all outcomes that are **not** in the event.

A = Getting an even number , A={2,4,6}
Complement of A: A′={1,3,5}

---
### -> Conditional Probability

> **The probability of an event occurring, given that another event has already occurred.**

Suppose:
- A = Getting an odd number
- B = Getting a number less than 4

When you roll a die: S={1,2,3,4,5,6} A={1,3,5} B={1,2,3}
If we already know that B has occurred, then the sample space changes from:
{1,2,3,4,5,6} to: {1,2,3}
Now, among these three outcomes, the odd numbers are: {1,3}
Therefore: P(A∣B)=32​

This is the basic idea of conditional probability. We reduce the sample space based on the given condition.
$$  
P(A\mid B)=\frac{P(A\cap B)}{P(B)}, \quad P(B)>0  
$$​
- P(A∣B) = Probability of A given 
- P(A∩B) = Probability of both A and 
- P(B) = Probability of B


-> Die Problem
A die is rolled. A = Getting an even number . B = Getting a number greater than 3
Find P(A∣B).
$$  
A={2,4,6}, \quad B={4,5,6}  
$$

$$  
A\cap B={4,6}  
$$

$$  
P(B)=\frac{3}{6}, \quad P(A\cap B)=\frac{2}{6}  
$$

$$  
\begin{aligned}  
P(A\mid B) &= \frac{P(A\cap B)}{P(B)}  
&= \frac{2/6}{3/6}  
&= \frac{2}{3}  
\end{aligned}  
$$
-> Coin Toss
Two coins are tossed.
Find the probability of getting two heads, given that **at least one head has occurred**.
Solution:
$$  
S={HH,HT,TH,TT}  
$$

Let (A) = getting two heads, and (B) = getting at least one head.
$$  
A={HH}, \quad B={HH,HT,TH}  
$$

$$  
A\cap B={HH}  
$$

$$  
P(B)=\frac{3}{4}, \quad P(A\cap B)=\frac{1}{4}  
$$

$$  
\begin{aligned}  
P(A\mid B)&=\frac{P(A\cap B)}{P(B)}\  
&=\frac{1/4}{3/4}\  
&=\boxed{\frac{1}{3}}  
\end{aligned}  
$$
​
-> Balls
A box contains 6 white balls and 4 red balls. Two balls are drawn without replacement.
Find the probability that the second ball is red, given that the first ball is white.
Solution:
Initially, there are 6 white balls and 4 red balls, making 10 balls in total.
Given that the first ball is white, one white ball is removed.
Remaining balls:
- White balls = 5
- Red balls = 4
- Total balls = 9
Let (A) = the second ball is red, and (B) = the first ball is white.

Since the first ball is white, 4 red balls remain out of 9 balls.

$$  
\begin{aligned}  
P(A\mid B)&=\frac{4}{9}  
\end{aligned}  
$$

---
### -> Properties​

##### Three Interpretations of Probability

1. Classical (a priori/theoretical) approach: Applies when all outcomes in the sample space are equally likely. $$  
P(E)=\frac{m}{n}  
$$
2. Relative frequency (empirical/a posteriori) approach: Defines probability as what happens if you repeat an experiment many, many times and track the proportion of times an event occurs.
$$  
P(E)=\lim_{n\to\infty}\frac{\text{Number of times }E\text{ occurs}}{n}  
$$​Example: Toss a coin repeatedly — 10 times, then 20, then 1,000, then 10,000 times — and track the proportion of heads. As the number of tosses grows very large, this proportion tends to settle around a stable value (e.g., ~0.5 for a fair coin). 

3. Subjective approach:  Probability as a person's degree of belief in an event, not derived from equally-likely outcomes or repeated trials.

Example: "There's a 75% chance this first-time candidate wins the election" — this can't be computed from symmetry (classical) or repeated identical trials (relative frequency, since elections aren't repeatable in that way) — it's a considered judgment/belief.

##### -> The Three Axioms of Probability

**Axiom 1:** For any event E,  $$  
0 \le P(E) \le 1  
$$
**Axiom 2:**  $$  
P(S)=1  
$$

**Axiom 3:** For a sequence of mutually exclusive (disjoint) events,  
$$  
P\left(\bigcup_{i=1}^{\infty} E_i\right)  
=\sum_{i=1}^{\infty} P(E_i)  
$$
P(A₁ ∪ A₂ ∪ ... ∪ Aₙ) = P(A₁) + P(A₂) + ... + P(Aₙ)

Example: Rolling a die, E₁ = "odd number" = {1,3,5}, E₂ = "even number" = {2,4,6}. These are disjoint (a roll can't be both odd and even).  
P(E₁) = 3/6, P(E₂) = 3/6  
P(E₁ ∪ E₂) = P(E₁) + P(E₂) = 3/6 + 3/6 = 1

###### -> The Complement Rule$$  
P(E^c)=1-P(E)  
$$
$$  
P(\emptyset)=0  
$$

-> **The Addition Rule :**
$$  
P(E_1 \cup E_2)=P(E_1)+P(E_2)-P(E_1\cap E_2)  
$$


**Problem:** A customer at a clothing store: P(buys a shirt, S) = 0.3, P(buys a pant, P) = 0.2, P(buys both, S∩P) = 0.1. What's the probability a customer buys neither a shirt nor a pant?
$$  
P(\text{neither})=P((S\cup P)^c)=1-P(S\cup P)  
$$
$$  
\begin{aligned}  
P(S\cup P) &= P(S)+P(P)-P(S\cap P)\  
&=0.3+0.2-0.1\  
&=0.4  
\end{aligned}  
$$

$$  
P(\text{neither})=1-0.4=\mathbf{0.6}  
$$
60% of customers buy neither item.

---
---
### -> Bayes Theorem

Bayes' theorem helps us update a probability when new information becomes available.
$$  
P(A\mid B)=\frac{P(B\mid A)\times P(A)}{P(B)}  
$$

- P(A) = Prior probability
- P(B∣A) = Likelihood
- P(B) = Evidence
- P(A∣B) = Posterior probability

Suppose
- Event A = A person has a disease.
- Event B = The person's test result is positive.

We want to find: P( Disease ∣ Positive )
We already know:
 - How many people have the disease.
- How often the test correctly detects the disease.

Bayes' theorem combines this information to calculate the probability that the person actually has the disease.

#####  Q1. Medical Test

Suppose:
- 1% of people have a disease.
- If a person has the disease, the test is positive 99% of the time.
- If a person does not have the disease, the test is positive 5% of the time.
Find the probability that a person actually has the disease if the test result is positive.

**Solution:**
Let (D) = person has the disease, and (+) = test result is positive.
$$  
P(D)=0.01  
$$$$  
P(D^c)=1-0.01=0.99  
$$$$  
P(+\mid D)=0.99  
$$$$  
P(+\mid D^c)=0.05  
$$

Using Bayes' theorem:

$$  
P(D\mid +)=\frac{P(+\mid D)\times P(D)}{P(+)}  
$$
By the law of total probability:$$  
\begin{aligned}  
P(+) &= P(+\mid D)P(D)\  
&\quad +P(+\mid D^c)P(D^c)\  
&=(0.99)(0.01)+(0.05)(0.99)\  
&=0.0099+0.0495\  
&=0.0594  
\end{aligned}  
$$
Therefore,
$$  
\begin{aligned}  
P(D\mid +)&=\frac{(0.99)(0.01)}{0.0594}\  
&=\frac{0.0099}{0.0594}\  
&\approx 0.1667  
\end{aligned}  
$$

###### Q2. Three Bags Problem
Bag A contains 3 white balls and 2 black balls
Bag B contains 4 white balls and 6 black balls
One bag is chosen randomly.
A white ball is drawn.
Find the probability that the ball came from Bag A.

**Solution:**

Let (A) = Bag A is chosen, (B) = Bag B is chosen, and (W) = a white ball is drawn.
$$  
P(A)=P(B)=\frac{1}{2}  
$$$$  
P(W\mid A)=\frac{3}{5}, \quad P(W\mid B)=\frac{4}{10}  
$$Using Bayes' theorem:
$$  
P(A\mid W)=\frac{P(W\mid A)P(A)}{P(W)}  
$$By the law of total probability:
$$  
\begin{aligned}  
P(W)&=P(W\mid A)P(A)+P(W\mid B)P(B)\  
&=\frac{3}{5}\times\frac{1}{2}+\frac{4}{10}\times\frac{1}{2}\  
&=\frac{3}{10}+\frac{2}{10}\  
&=\frac{1}{2}  
\end{aligned}  
$$Therefore,
$$  
\begin{aligned}  
P(A\mid W)&=\frac{\frac{3}{5}\times\frac{1}{2}}{\frac{1}{2}}\  
&=\frac{3}{10}\times 2\  
&=\boxed{\frac{3}{5}}  
\end{aligned}  
$$


---

Suppose you want to classify an email as:
- Spam
- Not spam

You see the words:
> "Win a free lottery now"

Naive Bayes asks:
> Which class is more likely after seeing these words?

It uses Bayes' theorem:
It is called Naive because it makes a very strong assumption:
> All features are independent of each other.

Naive Bayes assumes that the probability of seeing the word **Free** is independent of the probability of seeing the word **Lottery**.
In real life, these words are often related.
The algorithm **naively assumes independence**, which is why it is called Naive Bayes.

###### How the algorithm works

Step 1: Calculate prior probability
Out of 100 emails:
- 40 are spam
- 60 are not spam

Then: P(Spam)=0.6

Step 2: Calculate likelihood
Among 40 spam emails:
- 32 contain the word **Free**
Then: P(Free∣Spam)=0.8

Among 60 non-spam emails:
- 6 contain the word **Free**
Then: P(Free∣Not Spam)0.1

Step 3: Apply Bayes' theorem
$$  
P(\text{Spam}\mid\text{Free})=\frac{P(\text{Free}\mid\text{Spam})P(\text{Spam})}{P(\text{Free})}  
$$
​
The larger probability determines the class.


| Email type | Total |
| ---------- | ----- |
| Spam       | 40    |
| Not spam   | 60    |
The word **Offer** appears:
- In 30 spam emails
- In 12 non-spam emails
Find which class an email containing the word **Offer** belongs to.

**Solution:**
Let (S) = Spam, (N) = Not spam, and (O) = the word "Offer" appears.
Step 1: Calculate the prior probabilities.
$$  
P(S)=\frac{40}{100}=0.4  
$$$$  
P(N)=\frac{60}{100}=0.6  
$$**Step 2: Calculate the likelihoods.**
$$  
P(O\mid S)=\frac{30}{40}=0.75  
$$$$  
P(O\mid N)=\frac{12}{60}=0.20  
$$**Step 3: Calculate the probability of observing "Offer".**
$$  
\begin{aligned}  
P(O)&=P(O\mid S)P(S)+P(O\mid N)P(N)\  
&=(0.75)(0.4)+(0.20)(0.6)\  
&=0.30+0.12\  
&=0.42  
\end{aligned}  
$$

**Step 4: Apply Bayes' theorem.**

$$  
\begin{aligned}  
P(S\mid O)&=\frac{P(O\mid S)P(S)}{P(O)}\  
&=\frac{(0.75)(0.4)}{0.42}\  
&=\frac{0.30}{0.42}\  
&\approx 0.7143  
\end{aligned}  
$$Final Answer:
$$  
P(S\mid O)\approx 71.43%  
$$

The email is more likely to be **Spam**, with a probability of approximately **71.43%**.
