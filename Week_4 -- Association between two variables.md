
Now we move into two-variable analysis — the first real technique for it is the **contingency table**, used when both variables are categorical. 

##### 1. Association ≠ Causality 
Before anything else, when we ask "is variable A associated with variable B," we are not claiming A causes B or B causes A. We're only asking whether the two variables tend to move together or show some pattern of co-occurrence.

##### -> The Contingency Table 

**The motivating question:** A market research firm wants to know if smartphone ownership is associated with gender. They survey 100 university students, recording two categorical variables per person: **Gender** (Male/Female) and **Owns a Smartphone** (Yes/No).
- Gender: 44 Female, 56 Male
- Ownership: 76 Yes, 24 No

These separate summaries say nothing about the _relationship_ between the two variables. You can't tell from these alone whether female students own phones at a different rate than male students 

**Definition:** A contingency table (also called a **two-way table**) cross-tabulates two categorical variables — one variable's categories become the rows, the other variable's categories become the columns, and each cell shows the count of observations that fall into that specific combination

| Gender           | Owns Phone: Yes | Owns Phone: No | Row Total |
| ---------------- | --------------- | -------------- | --------- |
| **Female**       | 34              | 10             | 44        |
| **Male**         | 42              | 14             | 56        |
| **Column Total** | 76              | 24             | 100       |
##### Order Doesn't Matter — Unless the Variable Is Ordinal
Since both Gender (nominal) and Ownership (nominal) have no natural order, you could arrange the table as Female/Male or Male/Female, Yes/No or No/Yes — it makes zero difference
But watch out when a variable IS ordinal

| Category         | Owns Phone: Yes | Owns Phone: No | Row Total |
| ---------------- | --------------- | -------------- | --------- |
| **High**         | 18              | 2              | 20        |
| **Medium**       | 39              | 27             | 66        |
| **Low**          | 5               | 9              | 14        |
| **Column Total** | 62              | 38             | 100       |
Now the table reads naturally top-to-bottom by income level, and you can visually scan the pattern

### -> Building It in Google Sheets (Pivot Table Method)

1. Highlight your data (both variable columns, all rows).
2. Go to **Data → Pivot table**, create it in the existing/new sheet.
3. In the Pivot Table Editor:
    - **Rows** → add the first categorical variable (e.g., Gender or Income)
    - **Columns** → add the second categorical variable (e.g., Ownership)
    - **Values** → add either variable, summarized by **COUNT**
4. This auto-generates the cross-tabulated counts — exactly the contingency table structure.

If your row variable is ordinal, check the pivot table's row order carefully — you may need to recode categories numerically to force the correct sequence...

---
---
## -->Relative Frequencies

#### 1. Row Relative Frequency vs Column Relative Frequency

##### -> Row Relative Frequency
**Definition:** Divide each cell by its **row total**.
Example (Gender × Ownership):

| Gender | Yes | No  | Row Total |
| ------ | --- | --- | --------- |
| Female | 34  | 10  | 44        |
| Male   | 42  | 14  | 56        |
Row relative frequencies for Female: 34/44 = **77.3%** own, 10/44 = **22.7%** don't own.  
Row relative frequencies for Male: 42/56 = **75%** own, 14/56 = **25%** don't own.

##### -> Column Relative Frequency
**Definition:** Divide each cell by its **column total**.

**Example:** Among the 76 total owners: 34/76 = **44.7%** are female, 42/76 = **55.3%** are male.  
Among the 24 total non-owners: 10/24 = **41.7%** are female, 14/24 = **58.3%** are male.

Row relative frequency and column relative frequency are answering _fundamentally different questions_ — one conditions on the row category, the other conditions on the column category. 

#### -> Detecting Association 

> **If the row relative frequencies (or column relative frequencies) are approximately the SAME across all rows (or columns) → the two variables are NOT associated.**  
> **If the row relative frequencies (or column relative frequencies) are DIFFERENT across rows (or columns) → the two variables ARE associated.**

If knowing someone's gender tells you _nothing extra_ about whether they own a phone, then gender carries no information about ownership, so they're not associated. But if the ownership rate is dramatically different depending on income level, then knowing someone's income _does_ give you real information about whether they likely own a phone — that's association.

##### Example 1: Gender × Ownership → NOT Associated
Row relative frequencies:
- Female: 77% own, 23% don't
- Male: 75% own, 25% don't
- Overall: 76% own, 24% don't
These are all essentially the same (77% ≈ 75% ≈ 76%) — the ownership rate doesn't meaningfully shift based on gender.
Column relative frequencies confirm this too: among owners, 44.7% female/55.3% male — almost identical to the overall population split of 44%/56% female/male. Same story among non-owners.
##### Example 2: Income × Ownership → Associated
Row relative frequencies:
- High income: 90% own, 10% don't
- Medium income: 59% own, 41% don't
- Low income: 36% own, 64% don't
- Overall: 62% own, 38% don't
These are dramatically different across income levels — 90% vs 59% vs 36% is a huge spread
Column relative frequencies confirm this too: among owners, only 8% are low-income, but among non-owners, 24% are low-income

#### -> Graphical Summary — The Stacked (Segmented) Bar Chart
Like a regular bar chart (categories on one axis, counts on the other), but each bar is further divided into segments representing the second variable's categories within it.

**Example:** Bar for "Female" (height 44) is split into two colored segments: one segment (77%) for "owns a phone," another (23%) for "doesn't own." Same for the "Male" bar. 

**Ordinal rule still applies:** Since income is ordinal, the bars must be arranged in the correct Low→Medium→High (or High→Medium→Low) order — never scrambled alphabetically

#### -> The 100% Stacked Bar Chart 

**The problem with a standard stacked bar chart:** Bar _heights_ differ because category sizes differ (44 females vs 56 males; or 20 high-income vs 66 medium-income vs 14 low-income). This makes it slightly harder to visually compare _proportions_ across bars of different heights.

**The fix — 100% stacked bar chart:** Instead of showing raw counts, every bar is stretched to the same total height (100%), and the segments now represent _pure proportions_ rather than raw counts.
Since every bar is now the same height, you're purely comparing "where does the color split happen" across bars — no need to mentally adjust for different bar heights. This makes proportional differences (or similarities) immediately, visually obvious.

-> When to use which:
- **Standard stacked bar chart** — when care about the actual _counts/sizes_ of each category 
- **100% stacked bar chart** —  only care about the _proportional relationship_

---
---
## -> Scatterplot

Now we move to numerical-numerical association — the scatter plot. This mirrors the contingency table's role for categorical data, but the mechanics and visual logic are quite different. 

**Definition:** A scatter plot displays pairs of values as points on a 2D plane — each observation contributes one point, whose position is determined by its value on two numerical variables simultaneously.

**Example (Age vs Height):** Suppose you record 5 people's age (years) and height (cm):
- Person 1: (age=1, height=75)
- Person 2: (age=2, height=85)
- Person 3: (age=3, height=94)
- Person 4: (age=4, height=101)
- Person 5: (age=5, height=108)
Each person becomes an **ordered pair** — (1,75), (2,85), (3,94), (4,101), (5,108) — and each pair is plotted as a single dot on the graph.

**The rule:**
- **X-axis = Explanatory variable** — the variable you think might be _explaining_ or _driving_ the pattern.
- **Y-axis = Response variable** — the variable you're trying to _understand/explain_, the one you suspect _responds_ to changes in the other.

**Example (Age vs Height):** You're naturally asking "as a person gets older, what happens to their height?" — you're using age to explain height, not the other way around. So Age → x-axis (explanatory), Height → y-axis (response).

**Example (Real estate — house size vs price):** Size → x-axis , Price → y-axis 

#### -> Constructing a Scatter Plot
1. Identify explanatory (x) and response (y) variables.
2. Set up your x-axis with the explanatory variable's values, in proper numerical order.
3. Set up your y-axis with the response variable's values, in proper numerical order.
4. For each observation (each pair of values), plot a single point at the corresponding (x,y) coordinate.

**The core idea:** Look at the scatter plot and ask — **"Is there a visible pattern/trend to how the points are arranged, or do they look scattered with no discernible shape?"**

Dataset 1 (a clear pattern): As house size increases along the x-axis, price also tends to increase along the y-axis — the points roughly trend upward together, even if not perfectly. This visible upward trend suggests size and price are associated.

---
## -> Describing association

##### -> The Four Questions to Ask When Reading a Scatter Plot

1. Direction — Does the Pattern Trend Up or Down
Positive/Upward trend: As x increases, y also tends to increase.  
Negative/Downward trend: As x increases, y tends to decrease.  

2. Form — Is the Pattern Linear or Curved
Linear pattern: The points roughly follow a straight-line trend.  
Curved pattern: The points follow a bending, non-straight trend.  

3. Strength/Variation — How Tightly Clustered Are the Points Around the Pattern
Even if two datasets both show the same _direction_ and _form_ , they can differ hugely in how tightly the points hug that trend line versus how scattered/spread out they are around it.
A tightly clustered pattern indicates a _strong_ association — you can predict y from x fairly reliably. A loosely scattered pattern indicates a _weaker_ association

4. Outliers 
Points that clearly deviate from the trend the rest of the data follows.
An outlier in a scatter plot can distort your sense of the overall pattern. Recognizing them visually is an important first step before trusting any numerical summary of the relationship.

---
---
## -->Covariance

Now we quantify what the scatter plot showed us visually — this is **covariance**, the first numerical measure of association.

Recall the age/height example: Age = {1,2,3,4,5}, Height = {75,85,94,101,108}. Mean age = 3, mean height = 92.6.
**The key idea:** Draw a scatter plot, and draw a vertical line at x̄ (mean of x) and a horizontal line at ȳ (mean of y). These two lines split your entire scatter plot into **4 quadrants**:
- **Bottom-left region:** points where x < x̄ AND y < ȳ (both below their means)
- **Top-right region:** points where x > x̄ AND y > ȳ (both above their means)
- **Top-left region:** points where x < x̄ but y > ȳ
- **Bottom-right region:** points where x > x̄ but y < ȳ

For each point, compute:
- **x-deviation** = xᵢ − x̄
- **y-deviation** = yᵢ − ȳ

|Age (x)|Height (y)|x−x̄ = x−3|y−ȳ = y−92.6|
|---|---|---|---|
|1|75|−2|−17.6|
|2|85|−1|−7.6|
|3|94|0|1.4|
|4|101|1|8.4|
|5|108|2|15.4|
Notice the pattern: Every time the x-deviation is negative, the y-deviation is also negative. Every time the x-deviation is positive, the y-deviation is also positive. The signs match, consistently.
If you multiply the x-deviation and y-deviation for each point:
When signs match -- Product is always positive.
When signs are opposite: Product is always negative.


**Population covariance:
$$  
\sigma_{xy} = \frac{\sum_{i=1}^{N}(x_i-\bar{x})(y_i-\bar{y})}{N}  
$$
Sample covariance: just divide by N-1 instead of N

Worked example — Age/Height:
Sum of products = 35.2+7.6+0+8.4+30.8 = 82 
Population covariance = 82/5 = 16.4
Sample covariance = 82/4 = 20.5

-> **Google Sheets:** `COVARIANCE.P()` gives population covariance, `COVARIANCE.S()` gives sample covariance.

- **Positive covariance** → the two variables tend to move in the **same direction** 
- **Negative covariance** → the two variables tend to move in **opposite directions** 
- Covariance near zero, would suggest no consistent linear relationship.

##### -> Problem With Covariance 
Deviations carry the units of their original variable. In the age/height example:the product is in year×centimeter units — a unit that doesn't correspond to anything physically meaningful 
 
you cannot compare covariance values across different datasets/variable pairs to judge which relationship is "stronger.
This directly parallels the variance→standard-deviation problem from before

___
---
## -> Correlation

Recall the Covariance problem
The fix: Divide covariance by the standard deviations of both variables.
$$  
r = \frac{\operatorname{Cov}(x,y)}{s_x s_y}  
= \frac{\sum_{i=1}^{N}(x_i-\bar{x})(y_i-\bar{y})}  
{\sqrt{\sum_{i=1}^{N}(x_i-\bar{x})^2}\sqrt{\sum_{i=1}^{N}(y_i-\bar{y})^2}}  
$$

 Covariance has units of (x-units × y-units). Standard deviation of x has units of (x-units). Standard deviation of y has units of (y-units). So it becomes unitless....
This is exactly why correlation (also called **Pearson's correlation coefficient**, denoted **r**) can be meaningfully compared across _any_ pair of variables, regardless of what they're measured in 

>**The correlation coefficient always falls between −1 and +1**, inclusive.
- **r = +1** → perfect positive linear relationship (as x increases, y increases in perfect lockstep, all points fall exactly on an upward line).
- **r = −1** → perfect negative linear relationship (all points fall exactly on a downward line).
- **r = 0** → no linear relationship at all.
- Values in between indicate varying _strength_ — closer to ±1 means a tighter, stronger linear pattern; closer to 0 means a weaker or nonexistent one.

Using the same age/height data (x̄=3, ȳ=92.6):
- Sum of squared x-deviations = 4+1+0+1+4 = **10**
- Sum of squared y-deviations = 309.76+57.76+1.96+70.56+237.16 = **677.2**
- Sum of product of deviations = **82** (computed earlier for covariance)

$$  
r = \frac{82}{\sqrt{10}\times\sqrt{677.2}}  
= \frac{82}{\sqrt{6772}}  
\approx \frac{82}{82.29}  
\approx 0.9965  
$$

**r ≈ 0.997** — this is an extremely strong positive linear relationship

- **0.75 to 1.0** (or −0.75 to −1.0) → **strong** positive (or negative) linear association
- **0.25 to 0.75** (or −0.25 to −0.75) → **moderate/weak-to-reasonable** association
- **Close to 0** (roughly −0.25 to 0.25) → **little to no** linear association

-> The **sign** of covariance/correlation tells you the _direction_ , while the **magnitude** tells you the _strength_ (how tightly clustered around a line). These are two separate pieces of information both packed into the single r value

---
## -> Fitting a line

Everything so far — scatter plots, covariance, correlation — told you _whether_ a linear relationship exists and _how strong_ it is. **can I write down the actual equation describing that line?**

**The equation form:** y = mx + c (the standard slope-intercept line equation you already know)
- **y** = response variable
- **x** = explanatory variable
- **m** = slope
- **c** = intercept (y-value when x=0)

The actual _math_ behind finding the "best" line (technically called the **line of best fit**, computed via a method called least squares

##### 2. Getting the Line in Google Sheets
1. Insert a scatter plot.
2. Under **Customize → Series → Trendline** —overlays a best-fit straight line through your scattered points.
3. Under the **Label** option, choose **"Use Equation"** — this displays the actual line equation directly on the chart.
4. You can also request **R²** to be displayed alongside it (more on this below).

 
 
 Worked Example 1 — House Size vs Price
Equation obtained: Price = 30.5 × Size + 36
- **Slope (m) = 30.5** — for every 1-unit increase in size (in thousands of sq ft), price increases by about 30.5 (lakhs of rupees).
- **Intercept (c) = 36** — the line's predicted price when size = 0 (often not literally meaningful)
- **Slope is positive** → confirms a **positive relationship

#### -> R² — The Goodness-of-Fit Measure

R² measures how well the line captures/explains the pattern in your data — formally, it represents the proportion of variability in y that is "explained" by the linear relationship with x.
R² always lies between 0 and 1
- **R² close to 1** → the line fits the data very well
- **R² close to 0** → the line fits poorly; knowing x tells you very little about where y will fall.

**The elegant connection to correlation — R² = r²**
Why this makes sense intuitively: Squaring r does two things: 
(1) it makes the result always **positive** — which is exactly why R² can never tell you direction, only strength of fit
(2) it "shrinks" the value toward 0 unless r is already very close to ±1 

A low R² is the signal that tells you not to trust that line as a meaningful description of the relationship. 

---
### -> Association between categorical & numerical variables

This technique only applies when the categorical variable has exactly two categories— called a **dichotomous variable**.

Correlation needs **numbers** to compute means, deviations, standard deviations — it fundamentally can't operate on text labels like Male/Female.
-> **The fix — coding:** Convert the categorical variable into numbers by arbitrarily assigning **0 and 1** Example: Female = 1, Male = 0. This is called a dummy-coded or indicator variable.

Even though one variable is now coded as 0/1, you can still make a scatter plot: x-axis = coded gender (0 or 1), y-axis = marks. Since gender only takes two values, all the points cluster into just **two vertical columns** (one at x=0, one at x=1) — not a spread-out cloud 

-> Why fitting a line doesn't make sense here: Since x only takes values 0 and 1, a "trend line" through two vertical clusters of points isn't a meaningful description of a relationship the way it was for two genuinely continuous numerical variables.

#### -> Point-Biserial Correlation 

X = numerical variable (marks), Y = the coded dichotomous variable

Step 1: Split the data into two groups based on the value of Y 
Step 2: Compute the mean of X within each group.
- Ȳ₀ = mean marks of Group 0 (males)
- Ȳ₁ = mean marks of Group 1 (females)

**Worked example:** Female total marks = 944, 12 females → Ȳ₁ = 944/12 = **78.67**  
Male total marks = 658, 8 males → Ȳ₀ = 658/8 = **82.25**

**Step 3: Compute the proportion of observations in each group.**
- p₀ = n₀/n (proportion in group 0) = 8/20 = **0.4**
- p₁ = n₁/n (proportion in group 1) = 12/20 = **0.6**

**Step 4: Compute the standard deviation of X , sₓ**, using all 20 observations together 
**Step 5: Plug into the formula:**​$$  
r_{pb} = \frac{\bar{Y}_1 - \bar{Y}_0}{s_X}\sqrt{p_0 p_1}  
$$

Dataset 1 (weak association): r_pb = 0.188 (small, close to 0)  
male and female marks were similarly distributed, means were close (82.25 vs 78.67)

**Dataset 2 (strong association):** r_pb = **0.963** (very close to 1)  
Group means were dramatically different (females averaged ~90, males averaged ~70)

**What happened:** When Female=1, Male=0, the first dataset gave r_pb = **+0.188**. When the coding was _flipped_ (Female=0, Male=1) and recomputed, the result became **−0.188** 

Since the categorical variable here is nominal , the sign of the point-biserial correlation is essentially arbitrary and depends entirely on your coding choice. 

**Practical implication:** For a dichotomous categorical variable, you should generally interpret the magnitude (absolute value) of r_pb as your primary signal of "how strong is this association"

---
---
### -->Practice Problems

-> **Problem A1:**  
A survey of 200 people records Smoking Status (Smoker/Non-smoker) and Exercise Habit (Regular/Irregular). The contingency table:

| Regular exercise | Irregular exercise | Row total |     |
| ---------------- | ------------------ | --------- | --- |
| Smoker           | 20                 | 60        | 80  |
| Non-smoker       | 84                 | 36        | 120 |
| Column total     | 104                | 96        | 200 |

(a) Compute the row relative frequencies for each row.  
(b) Based on these, are smoking status and exercise habit associated?

Solution:
(a) Smoker row: 20/80 = **25%** regular, 60/80 = **75%** irregular  
Non-smoker row: 84/120 = **70%** regular, 36/120 = **30%** irregular

(b) Compare: Smokers → 25% regular exercisers. Non-smokers → 70% regular exercisers. These are **very different** (25% vs 70%) — not close to each other at all.

Conclusion: Smoking status and exercise habit ARE associated.** Non-smokers are far more likely to exercise regularly than smokers in this sample. 


-> **Problem 2:**  
Data on 5 employees — Years of Experience (x) and Monthly Salary in thousands (y):
x: 2, 4, 6, 8, 10  
y: 25, 30, 40, 45, 55

(a) Compute x̄ and ȳ.  
(b) Compute the deviations for x and y.  
(c) Compute the sample covariance.  
(d) Compute the sample correlation coefficient r.

**Solution:**
(a) x̄ = (2+4+6+8+10)/5 = 30/5 = **6**  
ȳ = (25+30+40+45+55)/5 = 195/5 = **39**
(b)

|x|y|x−x̄|y−ȳ|
|---|---|---|---|
|2|25|−4|−14|
|4|30|−2|−9|
|6|40|0|1|
|8|45|2|6|
|10|55|4|16|

(c) Products of deviations: (−4)(−14)=56, (−2)(−9)=18, (0)(1)=0, (2)(6)=12, (4)(16)=64  
Sum = 56+18+0+12+64 = **150**
Sample covariance = 150/(n−1) = 150/4 = **37.5**

(d) Sum of squared x-deviations: 16+4+0+4+16 = **40**  
Sum of squared y-deviations: 196+81+1+36+256 = **570**$$  
r = \frac{150}{\sqrt{40}\times\sqrt{570}}  
= \frac{150}{\sqrt{22800}}  
\approx \frac{150}{151.0}  
\approx 0.993  
$$
**r ≈ 0.99** — an extremely strong positive linear relationship between experience and salary.

-> **Problem 3:**  
Regression line as:  
Salary = 3.75 × Experience + 16.5
(a) Predict the salary for someone with 7 years of experience.  
(b) Given r ≈ 0.993 from B1, compute R² and interpret it.

Solution:
(a) Salary = 3.75×7 + 16.5 = 26.25 + 16.5 = **42.75 thousand**
(b) R² = r² = 0.993² ≈ **0.986**

Interpretation: About 98.6% of the variability in salary is explained by the linear relationship with experience — an extremely strong fit. The line describes this data very well.

**Problem 4:**  
A fitted line is: Score = −2.1 × Absences + 88, with r = −0.85.
(a) Compute R².  
(b) A student has 5 absences — predict their score.  
(c) Does the R² value alone tell you whether the relationship is positive or negative? What does?

**Solution:**
(a) R² = (−0.85)² = **0.7225**
(b) Score = −2.1×5 + 88 = −10.5 + 88 = **77.5**
(c) **No** — R² is always positive (it's a squared value), so R² = 0.7225 alone doesn't reveal direction. 


-> **Problem 5:**  
A trainer records whether 10 athletes use a new training method (Yes=1/No=0) and their race times (in minutes — lower is better):

|Athlete|Method (Y)|Time (X)|
|---|---|---|
|1|1|12|
|2|1|13|
|3|1|11|
|4|1|14|
|5|0|18|
|6|0|17|
|7|0|19|
|8|0|16|
|9|0|20|
|10|0|15|

(a) Split into groups and compute Ȳ₁ (mean time, method users) and Ȳ₀ (mean time, non-users).  
(b) Compute p₁ and p₀.  
(c) Given sₓ (std dev of all 10 times) = 2.98, compute the point-biserial correlation.  
(d) Interpret the result.

Solution:
(a) **Group 1 (method users):** times 12,13,11,14 → mean = (12+13+11+14)/4 = 50/4 = **12.5**  
**Group 0 (non-users):** times 18,17,19,16,20,15 → mean = (18+17+19+16+20+15)/6 = 105/6 = **17.5**

(b) n₁ = 4, n₀ = 6, total n = 10  
p₁ = 4/10 = **0.4**  
p₀ = 6/10 = **0.6**

(c)  
$$  
\begin{aligned}  
r_{pb} &= \frac{\bar{Y}_1-\bar{Y}_0}{s_X}\sqrt{p_0p_1} \  
&= \frac{12.5-17.5}{2.98}\sqrt{0.6\times0.4} \  
&= \frac{-5}{2.98}\sqrt{0.24} \  
&= (-1.678)(0.4899) \  
&\approx -0.822  
\end{aligned}  
$$

(d) **r_pb ≈ −0.82** — a strong association. Since lower time = better performance, and Method-users (coded 1) have a _lower_ mean time (12.5 vs 17.5), the negative sign here actually reflects a **favorable outcome** for the new method (faster times). 



