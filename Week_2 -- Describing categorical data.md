
### -->Frequency distributions

##### ->Frequency Table
A frequency table lists every distinct category a variable takes, alongside the count (frequency) of how many observations fall into each category.

Say you have this raw data — a sequence of 10 observations of a categorical variable with categories A, B, C, D:  A, A, B, C, A, D, A, B, D, C
Result:
- A: 4
- B: 2
- C: 2
- D: 2
- **Total: 10** 
This is literally the simplest form of describing categorical data.

##### ->Relative Frequency
Relative frequency = frequency of a category ÷ total number of observations.
For Dataset 1 (A=4, B=2, C=2, D=2, total=10):
- Relative frequency of A = 4/10 = **0.4**
- Relative frequency of B = 2/10 = **0.2**
- Relative frequency of C = 2/10 = **0.2**
- Relative frequency of D = 2/10 = **0.2**

- Relative frequencies always sum to exactly **1** 
- Relative frequency lets you compare datasets of different sizes fairly.
- It's always constrained between 0 and 1, so it's a standardized, size-independent measure.


---
### --> Charts of categorical data

#### ->Pie Chart
A circle divided into wedges (slices), where each wedge's size represents the share/proportion one category makes up of the whole.

How it's built : You take your relative frequency (proportion) for each category and multiply it by 360° (total degrees in a circle) to get that category's wedge angle.

**Example:** Category A has relative frequency 0.4 → wedge angle = 0.4 × 360° = **144°**. Categories B, C, D each have relative frequency 0.2 → wedge angle = 0.2 × 360° = **72°** each. Add them up: 144 + 72 + 72 + 72 = 360° 

- If your goal is to communicate proportions/shares, pie chart is the natural choice.

#### ->Bar Chart
Distinct categories go on one axis (traditionally horizontal), and either the frequency (count) or relative frequency (proportion) goes on the other axis. Each category gets a bar of equal width, with height/length representing its count.

**Two orientations:**
- **Vertical bar chart** — categories on x-axis, counts as bar height going up.
- **Horizontal bar chart** — categories on y-axis, counts as bar length going sideways.

Both convey identical information
Example: Category A=4, B=2, C=2, D=2 → bars of height 4, 2, 2, 2 respectively, all bars the same width, just different heights.

- Pie chart emphasizes share of the whole , while bar chart emphasizes raw counts and is easier for comparing categories against each other precisely.

#### ->Pareto Chart
A bar chart where the bars are sorted in descending order of frequency

**Example:** Suppose regions Northern=8000, Western=6000, Eastern=2000, Southern=1000 students. A regular bar chart might list them alphabetically or by whatever order they appear. A Pareto chart rearranges the bars so Northern (highest) comes first, then Western, then Eastern, then Southern (lowest)

This is genuinely useful in business contexts or the classic Pareto principle use-case: "which few defect categories cause most of our problems?").

Important nuance: you _can_ sort ascending or descending — the choice depends on what message you want to send. Descending is the more common convention (biggest problem/category first).


--> The rule: If your categorical variable is nominal , you're free to arrange bars in _any_ order, including sorted by frequency (Pareto style) 
But if your categorical variable is ordinal, you must preserve that natural order in your chart, even if it means the bars aren't sorted by height. The order _is_ information. If you scramble , you actively mislead the reader

--> Best practices
- Purpose First — Table vs Bar Chart vs Pie Chart
- Always Label/Annotate Your Charts
- Avoid Unnecessary Decoration

--> Problem: If you have, say, "favorite cricketer" data from 100 people, and most people cluster around 4-5 popular names but there's a long tail of 30+ names each chosen by just 1-2 people, a bar/pie chart with all these categories becomes unreadably cluttered.

- Wrong fix: Simply dropping the small categories — this silently deletes real data and misrepresents the full picture.
- Right fix: Group all the small categories together into a single **"Other"** category. This keeps the total accurate (nothing is thrown away) while still keeping the chart readable.

#### --> The Area Principle 
The area occupied by any part of a graph must be proportional to the actual amount of data it represents.
Humans intuitively judge "bigger area = bigger quantity." If your graph violates that, you are even unintentionally lying to your reader's visual instincts..

The fix: A proper bar chart — consistent bar widths, a clear baseline (starting at 0), and bar height/length that scales linearly with the actual value. 

#### --> Truncated Graphs 

The trap: A bar chart's vertical axis doesn't start at 0 — say it starts at 75 instead.
- Graph starting at 0: South and North look like they have a meaningfully larger share, but the visual difference between all four bars looks proportionate and mild.
- Same data, graph starting at 75: Now the small numerical differences between regions get visually exaggerated — South and North bars look dramatically taller than West and East, even though the actual underlying difference in the data might be small.

- The fix, if you must truncate: Clearly mark a **y-axis break** — a visual "zigzag" or gap symbol on the axis — to signal to the reader...


---
### --> Mode & Median


#### --> Round-Off Errors
When you round relative frequencies (percentages) to whole numbers for display, the rounded values might not sum back to exactly 100%.
Practical fix: After rounding, always check that your percentages sum to 100. If they don't, adjust the _largest_ category by the small discrepancy (a common convention) rather than leaving the total visibly wrong.

#### --> Descriptive Measures for Categorical Data — Mode

Up to now, you've only had _graphical_ ways to summarize categorical data (bar/pie charts). Now we get a single number that summarizes it — a "descriptive measure."

- **Measure of Central Tendency:** A number that tells you where the "center" or most typical value of your dataset lies.

- **Mode = the category with the highest frequency (the most common category).**

Example: Data: A, A, B, C, D, A, A, B, D, C, A, A, B, B, C (15 observations)  
Counting: A=6, B=4, C=3, D=2  
Mode = A, because it occurs most often.

- **Bimodal:** Two categories tie for the highest frequency.  
- **Multimodal:** More than two categories tie for the highest frequency.


#### --> Descriptive Measures for Categorical Data — Median

The median can only be computed for ordinal data (data with a natural order). It is _not defined_ for nominal data 
The median is the category corresponding to the middle observation, once you've sorted (ranked) all your data according to its natural order.

-> How to compute it 
Step 1: List out the observations in ranked order:  
A, A, A, A, B, B, B, B, B, B, C, C, C, D, D  
(positions 1–4 are A, positions 5–10 are B, positions 11–13 are C, positions 14–15 are D)

**Step 2:** Since n=15 is odd, there's a single, exact middle position: position (15+1)/2 = position 8.
Step 3: Position 8 falls within the B block (positions 5–10) → **Median = B**.

**What if n is even?** With n=14, there's no single middle position — positions 7 and 8 are _both_ middle If both fall in the same category, that's your median. If they straddle two different categories , the median is reported as avg of both if possible...







