
#### 1. Descriptive Statistics vs Inferential Statistics

Statistics splits into two branches based on what you're trying to do with the data:

- **Descriptive statistics** — just want to summarize and describe the data you _actually have 
- **Inferential statistics** — use the data to draw a conclusion about something _bigger than the data itself_ ..

Example: Suppose you have a dataset of Indian cricketers 
- If you ask: "Who has the highest batting average in this dataset? What's the total runs scored by these players?" — that's purely descriptive.
- If you ask: "Based on this data, should I pick this batsman for my IPL team next season?" now you're using the data to make a decision about the future . That's **inferential**.


#### 2. Population vs Sample

- **Population** = the entire set of everything/everyone you're actually interested in.
- **Sample** = a smaller subset of that population, which you actually collect data on.

#### 3. Representative Sample

Not just any subset qualifies as a good sample — it needs to be **representative**, meaning it reflects the same variety/composition as the population.

Example : Imagine the population is a jar of marbles: 60% blue, 30% red, 10% yellow. If you scoop out a sample of 20 marbles and it happens to contain _zero_ yellow marbles, that sample is not representative — it's a bad sample, because it misrepresents the population's composition.


---
### --> Understanding data

**Definition:** Data is simply facts and figures collected — numerical or otherwise.
Data is just the raw fact. You extract information/meaning from it through analysis.

--> Why Do We Collect Data?
We collect data because we're interested in the characteristics/attributes of some group 

**Example:** A dataset of car models with columns like number of doors, fuel type , mileage — zero people involved, but still perfectly valid data, because you're interested in the _characteristics of cars_.


--> Where Do We Get Data From?
1. Collect/generate it yourself (primary data)
2. Use already-published data (secondary data) 

##### -->Structured vs Unstructured Data

**Structured data** = data organized into a proper table (rows and columns), like a spreadsheet. This course only works with structured data ..
Unstructured is just opposite , messy and all...

--> A set of rules for building a valid data table:
**Rule 1: Rows = observations/cases, Columns = variables.**  
**Rule 2: A variable must actually vary.**  
**Rule 3: Be consistent with units.**  
**Rule 4: Be consistent with the type of value recorded (not just units).**  

### -->Missing Data (NA) vs. Zero 

- **0** = a real measured value, happens to be zero.
- **NA (missing)** = the characteristic wasn't measured/doesn't apply for that unit — must be marked distinctly, never silently replaced with 0.

---
### -->Classification of data

##### -->Categorical Data (Qualitative)
Categorical data identifies **group membership** — each observation falls into one of a limited number of groups/categories. You can't meaningfully do arithmetic on these values.
- **Gender** → 2 categories: Male, Female. Every student belongs to exactly one.
- **Board** → 3 categories: State Board, ICSE, CBSE.
- **Blood group** → categories like O+, O−, A+, A−, B+, etc.

##### -->Numerical Data (Quantitative)
Numerical data represents actual quantities — you can do real arithmetic on them and they usually come with a **unit of measurement**.
- Marks (484, 514, 565)
- Height in centimeters (152, 167, 175)
- Batting average, matches played, wickets taken

- Q: Is jersey number (10, 18, 7...) categorical or numerical...It's categorical, even though it's written as digits , because you'd never compute "average jersey number" or say "jersey number 18 is twice as much player as jersey number 9" — the number is just a label/identifier..


#### -->Within Numerical Data: Discrete vs Continuous

- **Discrete** — takes whole/countable values, with gaps between possible values. Example: **matches played** — you can play 463 matches, never 463.5 matches.
- **Continuous** — can take _any_ value within a range, including fractions/decimals. Example: **batting average** — can be 44.48, 44.49, 44.4812... — there's no minimum step size.

#### -> Cross-Sectional Data vs Time Series Data
- **Cross-sectional data** — all observations captured **at the same point in time** (or roughly so). Example: the school admissions dataset — every student's marks, board, gender recorded once, at the time they filled the form.
- **Time series data** — the **same variable, for the same unit**, tracked repeatedly over a period of time. Example : a retail shop tracking the quantity of potatoes procured _every day_ from March 1 to March 30. 

Cross-sectional = "many different things, one moment in time."
Time series = "one thing, many moments in time."

---
### --> Scales of measurement

##### The Four Scales — Two Live Under "Categorical," Two Live Under "Numerical"

**Under Categorical Data:**
1. Nominal
2. Ordinal

**Under Numerical Data:**  
3. Interval  
4. Ratio

> Nominal Scale — "Just labels, no order"
   Data consists of names/labels used purely to identify group membership. There is no meaningful order between the categories.

Examples: Name, Gender (M/F), Board (CBSE/ICSE/State), Blood group (O+, A−, etc.), Jersey number, Player role. 

>Ordinal Scale — "Labels, but now there's an order"
>Same as nominal (just labels) — but now the categories have a meaningful rank/order.

Example: A restaurant rating: Bad, Good, Excellent. 
Even though you _can_ code Bad=1, Good=2, Excellent=3 — you cannot assume the "distance" between categories is equal. All you know is the _ranking_, not the _size of the gaps_.
Ordinal = "I know which is more, but not by how much."


>Interval Scale — "Now the gaps are real, but there's no true zero"
   Numerical data where you _can_ meaningfully say the size of the difference between values is consistent — but there's no absolute/true zero point, so ratios are meaningless.

Example: Temperature (Celsius/Fahrenheit).
- The difference between 10°C and 20°C is exactly 10 degrees — same as the difference between 30°C and 40°C. gaps are meaningful and fixed.
- But you cannot say "40°C is twice as hot as 20°C." Since "zero" itself is arbitrary and not a true absence of the quantity, ratios break down.
Other examples: GPA (a 4.0 GPA isn't "twice as good" as a 2.0 GPA) — dates/calendar year is another classic interval example (year 2000 isn't "twice" year 1000).

> Ratio Scale — "Everything interval has, PLUS a true zero, so ratios work"
   Numerical data with all the properties of interval data, but now zero actually means "none of this quantity exists," which makes ratios/multiples meaningful.

Examples: Height, weight, marks, runs scored, wickets taken, age.
- A batsman who scored 200 runs really did score twice as much as someone who scored 100
Kelvin has a true zero (0 K = absolute zero, literally no thermal energy) — so Kelvin _is_ a ratio scale, and you genuinely can say 200K is twice as hot (in an absolute physical sense) as 100K.


