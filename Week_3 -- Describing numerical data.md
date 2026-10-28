
### --> Frequency tables for numerical data

- **Discrete variable** = involves a **count** of something.
- **Continuous variable** = involves a **measurement** of something.

**Example (household size, 15 people):** Suppose responses are various values from the set {1, 2, 3, 4, 5} — only 5 distinct possible values.
- 1 person: frequency 1
- 2 people: frequency 2
- 3 people: frequency 5
- 4 people: frequency 4
- 5 people: frequency 1  
Total = 15 , and relative frequencies (2/15, 3/15, 5/15, 4/15, 1/15) sum to 1 as always.

If your data has, say, 50 different marks ranging from 30 to 90, treating every distinct value as its own category would be cluttered and useless for seeing any pattern.
**The solution:** Group the range of values into **class intervals** (bins or buckets) — and now treat each interval as a category .
##### ->Rules for constructing class intervals
1. Choose a reasonable number of classes — generally between **5 and 20**.
2. Every observation must belong to exactly one class — no overlaps, no gaps.
3. Prefer equal-width class intervals (not mandatory, but good practice)

- **Lower class limit** — the smallest value allowed in a class.
- **Upper class limit** — the largest value allowed in a class.
- **Class width** — upper limit minus lower limit.
- **Class mark** — the midpoint/average of the lower and upper limits
- Convention: class interval includes its left endpoint but excludes its right endpoint.


### --> Histogram

**Definition:** A histogram is built exactly like a bar chart — class intervals on the horizontal axis, frequency (count) on the vertical axis, bar height = frequency of that class.
Unlike a bar chart , histogram has No gaps between the bars.

**Why:** In a categorical bar chart, gaps between bars visually emphasize that categories are _distinct, unordered_ things .
In a histogram, the class intervals are pieces of a continuous number line — 30–40 flows directly into 40–50 with no break in the underlying scale. Removing the gaps between bars visually communicates this continuity

#### --> Stem-and-Leaf Plot

Each numerical observation is split into two parts:
- **Stem** = all digits except the rightmost one.
- **Leaf** = the rightmost digit.

**Example:** The number 75 → stem = 7, leaf = 5. The number 78 → stem = 7, leaf = 8. Since both share stem 7, you can combine them under one stem with multiple leaves: "7 | 5 8".

-> Worked example (ages of 11 hospital patients)
Ages: 15, 22, 29, 36, 31, 23, 45, 10, 25, 28, 14

**Step 1:** Identify stems (tens digit here) — smallest to largest: 1, 2, 3, 4
**Step 2:** Write stems vertically:
**Step 3:** Place leaves (ones digit) next to their matching stem, in the order they appear in the raw data:
**Step 4:** Sort the leaves within each row in ascending order:
```
1 | 0 4 5
2 | 2 3 5 8 9
3 | 1 6
4 | 5
```
Reading this back: stem 1 with leaves 0,4,5 → ages 10, 14, 15. Stem 2 with leaves 2,3,5,8,9 → ages 22, 23, 25, 28, 29. Stem 3 with leaves 1,6 → ages 31, 36. Stem 4 with leaf 5 → age 45.

A stem-and-leaf plot gives you the visual "shape" of the distribution (like a sideways histogram) while still preserving every individual data value — nothing is lost to grouping. 

---
### -->Mean


Before the mean itself, note the bigger structure being set up:
- **Measures of central tendency** — where is the data "centered"? What's a typical value? (Mean, median, mode)
- **Measures of dispersion (variation/spread)** — how spread out is the data? (Range, variance, standard deviation )
Both are needed together 

>**Mean = sum of all observations ÷ number of observations.**
   Example: Data = {4, 3, 1, 2, 5}, so n = 5.  
   Mean = (4+3+1+2+5)/5 = 15/5 = 3

- **Sample mean** → denoted **x̄** ("x-bar") → uses **small n** (sample size) → formula: x̄ = (Σxᵢ)/n
- **Population mean** → denoted **μ** (Greek letter "mu") → uses **capital N** (population size) → formula: μ = (Σxᵢ)/N

It's not just notation snobbery — later in inferential statistics, you'll be using the _sample_ mean (x̄) to _estimate_ the unknown _population_ mean (μ).

- Mean Is Very Sensitive to Outliers 
A single extreme/unusual value (outlier) can drag the mean dramatically away from what feels like the typical value of the rest of the dataset.

#### --> Mean for Grouped/Frequency Data (Weighted Mean)

When your data comes as a frequency table rather than a raw list , you can't just add up the distinct values — you need to account for how many times each occurs.

Instead of writing out "1+1+2+2+2+3+3+3+3+3+4+4+4+4+5" and adding, you compute:  
(1×2) + (2×3) + (3×5) + (4×4) + (5×1) = 2 + 6 + 15 + 16 + 5 = 44
Mean = 44/15 ≈ 2.93

-> When data is grouped into class intervals , you don't know the _exact_ value of each observation anymore . So you approximate each observation within a class by that class's midpoint (class mark).

Formula:
$$
\bar{x} = \frac{\sum f_i x_i}{\sum f_i}
$$
where:
- $f_i$ = frequency of the i-th class
- $x_i$ = **class midpoint** (class mark)

The mean we get from this is  approximation, not the exact true mean. Because we're pretending every observation in the "30–40" bucket was exactly 35 — but really they could've been 31, 33, 38, anything in that range. You lost the exact values the moment you grouped the data into intervals. 

This is a genuine, permanent trade-off in statistics — grouping data (for readability, cleaner tables/histograms) always costs you some precision

#### --> Mean Changes
#### Rule 1: Adding a constant to every data point
If you create a new dataset yᵢ = xᵢ + c (add the same constant c to every observation), then:
$$ȳ = x̄ + c$$

Original marks have mean 59 (out of 100). Teacher adds 5 bonus marks to everyone. New mean = 59 + 5 = 64. 

#### Rule 2: Multiplying every data point by a constant

If yᵢ = c × xᵢ (scale every observation by the same constant c), then:
$$ ȳ = c × x̄ $$

Original mean = 59. Teacher decides to rescale marks to 40% weightage — multiply every mark by 0.4. New mean = 0.4 × 59 = **23.6**.

---
## -->Median and Mode

#### -->Median for Numerical Data 

The median is the value that splits the ordered data into a bottom 50% and a top 50%.

**Case 1: n is odd** → the median is the single value sitting exactly at position **(n+1)/2** in the sorted list.
**Case 2: n is even** → there's no single middle value — two values tie for the middle (positions n/2 and n/2+1). The median is their average.

- Median Resists Outliers unlike mean....
- **Dataset 1:** {2, 12, 5, 7, 6, 7, 3} → Mean = 6, **Median = 6**
- **Dataset 2:** Same data, but the "12" is replaced with 105 → Mean = 19.29 (jumped massively!), **Median = 6** (unchanged!)
- **Dataset 3:** Only 6 of the 7 observations (drop one) → Mean = 21.33, **Median = 5.5**

The median only cares about _position_ in the sorted order, not the actual magnitude of extreme values. Whether that largest value is 12 or 105 or 10,000, it's still just the largest value ..
So , when your data might contain outliers or extreme values, median is a more robust measure of central tendency than mean.

```python
Rule 1: Add a constant c to every observation → new median = old median + c
Rule 2: Multiply every observation by a constant c → new median = old median × c
```
Both mean and median behave identically under these linear transformations...

#### --> Mode  

The mode is simply the most frequently occurring value in the dataset 
If every value in the dataset is distinct , the dataset has no mode. Mode requires at least one value to repeat.

```python
Add constant c to every value → new mode = old mode + c 
Multiply every value by constant c → new mode = old mode × c
```

---
### -->Measures of dispersion- range

##### Why Do We Need a Measure of Dispersion At All?

Two datasets, both with 5 observations:
- Dataset 1: {3, 3, 3, 3, 3}
- Dataset 2: {1, 2, 3, 4, 5}

- Mean: both = 3
- Median: both = 3
- Mode: Dataset 1 = 3 (appears 5 times); Dataset 2 has no mode (all distinct)

**The problem this exposes:** If you only looked at mean and median, you'd think these two datasets are basically identical, But they're clearly _very_ different datasets: Dataset 1 has zero spread (every value is literally the same), Dataset 2 is spread from 1 to 5. Central tendency measures alone completely hide this difference.

#### --> Range — The Simplest Measure of Dispersion

Range = Maximum value − Minimum value.

Dataset 1 {3,3,3,3,3}: max=3, min=3 → Range = **0**  
Dataset 2 {1,2,3,4,5}: max=5, min=1 → Range = **4**

But range has a serious flaw — it's extremely sensitive to outliers, because it uses _only_ the two extreme values and ignores everything else.

#### --> Variance

Variance considers every single observation, not just the two extremes.

- Step 1 — Deviations. For each data point, compute how far it is from the mean: xᵢ − x̄.
- Step 2 — deviations from the mean always sum to zero. So simple summation is useless as a spread measure.
- Step 3 — The fix: square the deviations before summing. Squaring makes every term positive , and also has the nice side-effect of penalizing larger deviations more heavily..
- Step 4 — Average the squared deviations to get a typical measure of "spread."

##### The Formulas

**Population variance (σ²):**
$$
\sigma^2 = \frac{\sum_{i=1}^{N}(x_i-\mu)^2}{N}
$$​
**Sample variance (s²):**
$$
s^2 = \frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}
$$​
Population variance divides by **N** (total population size).
Sample variance divides by **n − 1**, not n. This "n−1" is famously called "Bessel's correction" 

###### Worked example — marks of 10 students, mean = 59
Deviations for each student: 68−59=9, 79−59=20, 38−59=−21, etc.  
Square each deviation: 9²=81, 20²=400, (−21)²=441, etc.  
Sum of squared deviations = **1898**
- Population variance = 1898/10 = **189.8**
- Sample variance = 1898/9 = **210.89** 

##### Rule 1: Adding a constant → variance does NOT change
Variance measures spread_— how far values are from each other/from the center. If you shift every single value by the same amount, the relative distances between all stay exactly the same
##### Rule 2: Multiplying by a constant → variance scales by c²
Original variance = 210.88. Scale everything by 0.4 → new variance = 0.4² × 210.88 = 0.16 × 210.88 = **33.74**.
It happens precisely because variance involves squaring.

#### --> Standard Deviation 

The problem variance has: If your original data is in kilograms, the _mean_ is also in kilograms , But variance involves squaring deviations, so variance ends up in kilograms², a squared unit that doesn't really correspond to anything physically meaningful.

**The fix:** Standard deviation = **square root of variance.** 

$$
s = \sqrt{s^2}
$$

- **Add a constant c** → standard deviation **unchanged** 
- **Multiply by constant c** → new standard deviation = **c × old standard deviation**


---
### --> Percentiles, quartiles, and interquartile range

#### --> Percentile 
The **100p-th percentile** is a value such that at least 100% of the data is ≤ it, and at least 100(1−p)% of the data is ≥ it.

The median is a percentile — the 50th percentile.
Set p = 0.5: 100×0.5 = 50% of the data is below it, and 100×(1−0.5) = 50% is above it.

The 99th percentile is a value where 99% of the data sits below it, and only 1% sits above

**Important distinction:** Percentile ≠ Percentage. If you score 80% (percentage) on an exam, that just says you got 80 out of 100 marks. If you're in the 80th percentile, it means 80% of _other test-takers_ scored lower than you — a completely different, comparative statement.

#### -> Computing a Percentile 

**Step 1:** Arrange data in ascending order (n observations).
**Step 2:** Compute **np** (n × the percentile you want, expressed as a decimal — e.g., p=0.25 for the 25th percentile).
**Step 3, two cases:**
Case A: np is NOT an integer → round **up** to the next whole number → that position in your sorted data gives you the percentile value directly.
Case B: np IS an integer → average the values at position **np** and position **np+1**.

##### Worked example (n=10, data sorted: 35, 38, 47, 58, 61, 66, 68, 68, 70, 79)
- 10th percentile (p=0.1): np = 10×0.1 = 1 → integer → average positions 1 and 2 = (35+38)/2 = 36.5
- 25th percentile (p=0.25): np = 10×0.25 = 2.5 → **not integer** → round up to 3 → 3rd value = **47**
- 50th percentile (median, p=0.5): np = 5 → integer → average positions 5 and 6 = (61+66)/2 = 63.5
- 75th percentile (p=0.75): np = 7.5 → not integer → round up to 8 → 8th value = 68
- 100th percentile (p=1.0): always the maximum value = 79


- Q1 (First/Lower Quartile) = 25th percentile
- Q2 (Second Quartile) = 50th percentile = the Median
- Q3 (Third/Upper Quartile) = 75th percentile

- Minimum to Q1 → bottom 25%
- Q1 to Q2 (median) → next 25%
- Q2 to Q3 → next 25%
- Q3 to Maximum → top 25%

##### --> The Five-Number Summary
A compact way to summarize an entire numerical dataset using exactly five values:
Minimum, Q1, Median (Q2), Q3, Maximum
In just five numbers, you capture the full _shape_ of your data 

##### -> Interquartile Range (IQR) = Q3 - Q1
IQR deliberately ignores the extreme top and bottom 25% of the data — it only measures the spread of the middle 50%. This makes IQR resistant to outliers..

- Mean (sensitive to outliers) ↔ Median (resistant to outliers)
- Range (sensitive to outliers) ↔ IQR (resistant to outliers)


Ex : Dataset A: 10, 12, 14, 16, 18, 20, 22, 24, 26, 28 (n=10)

(a) Range = Max − Min = 28 − 10 = **18**
(b) Q1: np = 10 × 0.25 = 2.5 → not integer → round up to 3 → 3rd value = **14**
    Q3: np = 10 × 0.75 = 7.5 → not integer → round up to 8 → 8th value = **24**
**IQR = 24 − 14 = 10**



