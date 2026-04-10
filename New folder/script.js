const defaultQuestions = [
  {
    id: 1,
    category: "Core Java",
    difficulty: "easy",
    question: "What is the difference between JDK, JRE, and JVM?",
    answer:
      "JVM runs Java bytecode, JRE contains JVM plus runtime libraries, and JDK contains JRE plus development tools like javac.",
    explanation:
      "Interviewers use this to check whether you understand Java execution from compile to run."
  },
  {
    id: 2,
    category: "OOP",
    difficulty: "easy",
    question: "Explain the four pillars of OOP in Java.",
    answer:
      "Encapsulation, Inheritance, Polymorphism, and Abstraction. These help organize code and reduce duplication.",
    explanation: "This is one of the most repeated Java fresher questions."
  },
  {
    id: 3,
    category: "Core Java",
    difficulty: "medium",
    question: "Why is String immutable in Java?",
    answer:
      "Immutability improves security, thread-safety, and allows String pool optimization. Once created, value cannot change.",
    explanation: "This checks your understanding of memory and performance design decisions."
  },
  {
    id: 4,
    category: "Collections",
    difficulty: "medium",
    question: "Difference between ArrayList and LinkedList?",
    answer:
      "ArrayList is backed by dynamic array and gives fast random access. LinkedList is node-based and is better for frequent insert/delete in middle when references are known.",
    explanation: "Interviewers want data structure selection reasoning."
  },
  {
    id: 5,
    category: "Collections",
    difficulty: "hard",
    question: "How does HashMap work internally in Java 8+?",
    answer:
      "HashMap uses array of buckets. Keys are hashed to bucket index. Collisions are handled by linked list, and high-collision buckets are treeified to balanced tree for better lookup.",
    explanation:
      "A very common intermediate-level question to test core data structure depth."
  },
  {
    id: 6,
    category: "Exception Handling",
    difficulty: "easy",
    question: "Checked vs unchecked exceptions?",
    answer:
      "Checked exceptions are validated at compile time and must be handled or declared. Unchecked exceptions extend RuntimeException and are not forced by compiler.",
    explanation: "Tests practical understanding of Java error handling."
  },
  {
    id: 7,
    category: "Multithreading",
    difficulty: "medium",
    question: "Difference between synchronized method and synchronized block?",
    answer:
      "A synchronized method locks the whole method on object/class monitor. A synchronized block locks only critical section, offering better control.",
    explanation: "This checks if you can write efficient thread-safe code."
  },
  {
    id: 8,
    category: "Multithreading",
    difficulty: "medium",
    question: "What is the difference between sleep() and wait()?",
    answer:
      "sleep() pauses current thread for time without releasing lock; wait() releases lock and waits until notify/notifyAll on same monitor.",
    explanation: "Classic interview trap question."
  },
  {
    id: 9,
    category: "JVM",
    difficulty: "medium",
    question: "What is Garbage Collection in Java?",
    answer:
      "Garbage Collection automatically reclaims memory of unreachable objects, reducing manual memory management errors.",
    explanation: "Important for memory-management understanding."
  },
  {
    id: 10,
    category: "JVM",
    difficulty: "hard",
    question: "What are strong, weak, soft, and phantom references?",
    answer:
      "Strong references prevent GC. Soft references may survive until memory pressure. Weak references are collected eagerly. Phantom references are used for post-mortem cleanup tracking.",
    explanation: "Asked in advanced Java memory questions."
  },
  {
    id: 11,
    category: "Core Java",
    difficulty: "easy",
    question: "What is method overloading and overriding?",
    answer:
      "Overloading: same method name with different parameters in same class. Overriding: subclass provides specific implementation of inherited method.",
    explanation: "Fundamental OOP interview topic."
  },
  {
    id: 12,
    category: "Java 8+",
    difficulty: "medium",
    question: "What is a functional interface?",
    answer:
      "An interface with exactly one abstract method. It can have default/static methods and is often used with lambdas.",
    explanation: "Frequently asked for Java 8 roles."
  },
  {
    id: 13,
    category: "Java 8+",
    difficulty: "medium",
    question: "What are Streams in Java and why use them?",
    answer:
      "Streams process collections declaratively with map/filter/reduce pipelines, improving readability and enabling parallelism.",
    explanation: "Interviewers assess modern Java style."
  },
  {
    id: 14,
    category: "Core Java",
    difficulty: "easy",
    question: "What is the difference between == and equals() in Java?",
    answer:
      "== compares references for objects; equals() compares logical content if overridden.",
    explanation: "Very common fresher-level question."
  },
  {
    id: 15,
    category: "Collections",
    difficulty: "medium",
    question: "Difference between HashSet and TreeSet?",
    answer:
      "HashSet is hash-table based and unordered, usually faster. TreeSet is sorted and based on Red-Black tree, with log(n) operations.",
    explanation: "Tests understanding of set implementations."
  },
  {
    id: 16,
    category: "Core Java",
    difficulty: "easy",
    question: "What is constructor chaining?",
    answer:
      "Calling one constructor from another constructor in same class using this(), or parent constructor using super().",
    explanation: "Basic object initialization concept."
  },
  {
    id: 17,
    category: "Exception Handling",
    difficulty: "medium",
    question: "What is try-with-resources?",
    answer:
      "A try block that automatically closes resources implementing AutoCloseable.",
    explanation: "Checks clean coding and resource management knowledge."
  },
  {
    id: 18,
    category: "Multithreading",
    difficulty: "hard",
    question: "What is deadlock and how can you prevent it?",
    answer:
      "Deadlock occurs when threads wait indefinitely for each other\'s locks. Prevent by lock ordering, timeout locks, and reducing lock scope.",
    explanation: "Frequently asked in backend-focused interviews."
  },
  {
    id: 19,
    category: "JVM",
    difficulty: "medium",
    question: "What is the Java Memory Model?",
    answer:
      "It defines rules for visibility, ordering, and atomicity of shared data between threads.",
    explanation: "Used to evaluate concurrency fundamentals."
  },
  {
    id: 20,
    category: "Core Java",
    difficulty: "medium",
    question: "What are final, finally, and finalize?",
    answer:
      "final is keyword for constants/non-overridable methods/non-inheritable classes; finally block executes after try/catch; finalize is deprecated GC callback method.",
    explanation: "Classic interview distinction question."
  },
  {
    id: 21,
    category: "Spring Basics",
    difficulty: "easy",
    question: "What is dependency injection in Spring?",
    answer:
      "Dependency Injection means objects receive dependencies from container instead of creating them manually.",
    explanation: "Even Java core interviews often include basic Spring concepts."
  },
  {
    id: 22,
    category: "Spring Basics",
    difficulty: "medium",
    question: "Difference between @Component, @Service, and @Repository?",
    answer:
      "All are stereotype annotations. @Component is generic, @Service is service layer semantic, @Repository is DAO layer with exception translation.",
    explanation: "Very frequent Spring interview question."
  },
  {
    id: 23,
    category: "SQL & DB",
    difficulty: "easy",
    question: "What is the difference between DELETE, TRUNCATE, and DROP?",
    answer:
      "DELETE removes rows with optional WHERE and can be rolled back (depending on DB settings), TRUNCATE clears all rows quickly, DROP removes table schema and data.",
    explanation: "Java developer interviews commonly test basic SQL."
  },
  {
    id: 24,
    category: "SQL & DB",
    difficulty: "medium",
    question: "What is indexing and why is it important?",
    answer:
      "Index is a data structure that speeds up query lookup, at the cost of extra storage and slower writes.",
    explanation: "Important for backend and optimization questions."
  },
  {
    id: 25,
    category: "Collections",
    difficulty: "hard",
    question: "Difference between fail-fast and fail-safe iterators?",
    answer:
      "Fail-fast iterators throw ConcurrentModificationException on structural changes. Fail-safe iterators iterate over cloned/snapshot data.",
    explanation: "Common collections deep-dive question."
  },
  {
    id: 26,
    category: "Core Java",
    difficulty: "medium",
    question: "Can we override static method in Java?",
    answer:
      "No true overriding; static methods are hidden based on reference type, not runtime object.",
    explanation: "Used to test static binding understanding."
  },
  {
    id: 27,
    category: "Java 8+",
    difficulty: "medium",
    question: "What is Optional and when should we use it?",
    answer:
      "Optional is a container object that may hold non-null value. It helps avoid NullPointerException and makes null handling explicit.",
    explanation: "Frequently asked modern Java coding practice question."
  },
  {
    id: 28,
    category: "Multithreading",
    difficulty: "medium",
    question: "What is ExecutorService?",
    answer:
      "ExecutorService is a framework for managing thread pools and asynchronous task execution.",
    explanation: "Industry code uses pools over manual thread creation."
  },
  {
    id: 29,
    category: "Exception Handling",
    difficulty: "hard",
    question: "What is exception propagation?",
    answer:
      "If a method does not handle an exception, it is passed up the call stack until handled or reaches JVM default handler.",
    explanation: "Checks practical stack behavior understanding."
  },
  {
    id: 30,
    category: "JVM",
    difficulty: "hard",
    question: "What is class loading in Java?",
    answer:
      "Class loading has loading, linking (verification, preparation, resolution), and initialization phases via class loaders.",
    explanation: "Advanced JVM fundamentals topic."
  },
  {
    id: 31,
    category: "Core Java",
    difficulty: "medium",
    question: "What is the difference between abstraction and encapsulation?",
    answer:
      "Abstraction hides implementation details and exposes behavior. Encapsulation binds data and methods together and restricts direct access using access modifiers.",
    explanation: "Very common conceptual OOP question."
  },
  {
    id: 32,
    category: "Collections",
    difficulty: "medium",
    question: "Difference between Comparable and Comparator?",
    answer:
      "Comparable defines natural ordering inside class using compareTo. Comparator defines external custom ordering using compare.",
    explanation: "Frequently asked while discussing sorting and clean design."
  },
  {
    id: 33,
    category: "Collections",
    difficulty: "hard",
    question: "Why is ConcurrentHashMap preferred in multi-threaded scenarios?",
    answer:
      "It supports high concurrency with segmented/bucket-level locking and avoids full map synchronization, improving throughput.",
    explanation: "Important backend interview question for thread-safe collections."
  },
  {
    id: 34,
    category: "Java 8+",
    difficulty: "medium",
    question: "What is the difference between map() and flatMap() in Streams?",
    answer:
      "map transforms each element to one output value, while flatMap transforms each element to a stream and flattens nested streams into one.",
    explanation: "Asked often when interviewers test practical stream usage."
  },
  {
    id: 35,
    category: "Multithreading",
    difficulty: "hard",
    question: "What is volatile in Java and when to use it?",
    answer:
      "volatile ensures visibility of latest value across threads and prevents certain reordering. Use it for simple shared flags, not compound atomic operations.",
    explanation: "Classic concurrency theory-to-practice question."
  },
  {
    id: 36,
    category: "Spring Basics",
    difficulty: "easy",
    question: "What is Spring Boot and why is it preferred?",
    answer:
      "Spring Boot simplifies Spring app setup using auto-configuration, starter dependencies, embedded servers, and production-ready defaults.",
    explanation: "One of the first questions in Java backend interviews."
  },
  {
    id: 37,
    category: "Spring Basics",
    difficulty: "medium",
    question: "What is the difference between @Controller and @RestController?",
    answer:
      "@Controller is used for MVC views, while @RestController combines @Controller + @ResponseBody to return JSON/XML API responses directly.",
    explanation: "Frequently asked in API and Spring Boot roles."
  },
  {
    id: 38,
    category: "Spring Basics",
    difficulty: "medium",
    question: "What are bean scopes in Spring?",
    answer:
      "Common scopes are singleton, prototype, request, session, and application. Singleton is default.",
    explanation: "Checks Spring container understanding."
  },
  {
    id: 39,
    category: "SQL & DB",
    difficulty: "medium",
    question: "What is normalization and denormalization?",
    answer:
      "Normalization reduces redundancy and improves integrity by splitting data into related tables. Denormalization combines data for faster reads at cost of redundancy.",
    explanation: "Very common DB design interview point."
  },
  {
    id: 40,
    category: "SQL & DB",
    difficulty: "medium",
    question: "What is the N+1 query problem?",
    answer:
      "N+1 occurs when one query loads parent records and then N additional queries fetch related child data, causing performance issues.",
    explanation: "Often asked when discussing ORM and API performance."
  },
  {
    id: 41,
    category: "System Design Basics",
    difficulty: "medium",
    question: "What is caching and where can you apply it in backend systems?",
    answer:
      "Caching stores frequently used data for faster access. You can cache DB query results, API responses, sessions, or computed values.",
    explanation: "Common performance and architecture question."
  },
  {
    id: 42,
    category: "System Design Basics",
    difficulty: "medium",
    question: "What is load balancing and why is it useful?",
    answer:
      "Load balancers distribute traffic across multiple servers to improve availability, scalability, and fault tolerance.",
    explanation: "Frequently asked for higher package backend roles."
  },
  {
    id: 43,
    category: "Testing",
    difficulty: "easy",
    question: "Difference between unit test and integration test?",
    answer:
      "Unit tests validate isolated logic quickly with mocks. Integration tests validate interactions between modules, DB, and external systems.",
    explanation: "Companies value test understanding for production code quality."
  },
  {
    id: 44,
    category: "Testing",
    difficulty: "medium",
    question: "What is mocking and when should you mock dependencies?",
    answer:
      "Mocking simulates dependent components in tests. Use it when dependency is slow, external, non-deterministic, or not part of unit under test.",
    explanation: "Practical testing question often asked with JUnit/Mockito."
  },
  {
    id: 45,
    category: "Project Discussion",
    difficulty: "easy",
    question: "Explain your project architecture in 2 minutes.",
    answer:
      "Describe the problem, users, tech stack, module flow, database choice, and one performance or scalability decision you made.",
    explanation: "Project explanation quality strongly impacts package and role level."
  },
  {
    id: 46,
    category: "Project Discussion",
    difficulty: "medium",
    question: "What was the most challenging bug you solved in your project?",
    answer:
      "Share issue context, root cause, debugging steps, final fix, and what preventive measure you introduced after the incident.",
    explanation: "Interviewers evaluate problem-solving maturity."
  },
  {
    id: 47,
    category: "Project Discussion",
    difficulty: "medium",
    question: "How did you improve project performance?",
    answer:
      "Mention profiling observations, optimization strategy (query/index/cache/refactor), and measurable result like reduced response time.",
    explanation: "Performance ownership is a key differentiator for better offers."
  },
  {
    id: 48,
    category: "HR & Package",
    difficulty: "easy",
    question: "Tell me about yourself as a Java developer.",
    answer:
      "Use a clear structure: education, Java fundamentals, projects, internship/experience, strengths, and current goal aligned to the role.",
    explanation: "Usually the first question and sets interview momentum."
  },
  {
    id: 49,
    category: "HR & Package",
    difficulty: "easy",
    question: "Why should we hire you for this Java role?",
    answer:
      "Connect your skills to job needs: Java fundamentals, API/backend project work, ownership mindset, fast learning, and consistency in practice.",
    explanation: "Strong impact question for shortlist decisions."
  },
  {
    id: 50,
    category: "HR & Package",
    difficulty: "medium",
    question: "How do you answer expected salary question as a fresher?",
    answer:
      "Give a researched range based on role/location and show flexibility: 'I am open within market range for this role and growth opportunity.'",
    explanation: "Helps you negotiate professionally without losing opportunities."
  },
  {
    id: 51,
    category: "HR & Package",
    difficulty: "medium",
    question: "What factors matter to you apart from salary?",
    answer:
      "Mention learning curve, backend ownership, mentorship, tech stack quality, and long-term growth with meaningful impact.",
    explanation: "Shows maturity and improves hiring confidence."
  },
  {
    id: 52,
    category: "HR & Package",
    difficulty: "medium",
    question: "Do you have offers from other companies?",
    answer:
      "Be honest and professional. If yes, share timeline politely. If no, emphasize your focused interest in this role and readiness.",
    explanation: "A common pressure question during offer stage."
  },
  {
    id: 53,
    category: "HR & Package",
    difficulty: "hard",
    question: "How do you negotiate for a better package after selection?",
    answer:
      "Thank them first, restate your fit and value, cite market data or competing opportunity, and request revised CTC professionally without aggressive tone.",
    explanation: "Important for cracking a decent package confidently."
  },
  {
    id: 54,
    category: "HR & Package",
    difficulty: "easy",
    question: "Where do you see yourself in 3 years?",
    answer:
      "Share realistic growth: becoming strong backend engineer, owning modules, writing reliable APIs, and mentoring juniors.",
    explanation: "Checks commitment and role clarity."
  },
  {
    id: 55,
    category: "HR & Package",
    difficulty: "medium",
    question: "What questions should you ask the interviewer at the end?",
    answer:
      "Ask about team goals, success metrics in first 90 days, code review culture, and growth path for Java developers.",
    explanation: "Good closing questions increase selection chances."
  }
];

const STORAGE_KEYS = {
  customQuestions: "java_custom_questions",
  practiced: "java_practiced",
  confident: "java_confident",
  codingDrafts: "java_coding_drafts"
};

const codingQuestions = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "easy",
    topic: "Arrays + HashMap",
    prompt:
      "Given an integer array nums and target, return indices of two numbers such that they add up to target. Assume exactly one valid answer.",
    example: "Input: nums = [2,7,11,15], target = 9 | Output: [0,1]",
    starter:
      "import java.util.*;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // your code\n        return new int[]{};\n    }\n}",
    solution:
      "import java.util.*;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int need = target - nums[i];\n            if (map.containsKey(need)) {\n                return new int[] { map.get(need), i };\n            }\n            map.put(nums[i], i);\n        }\n        return new int[] {};\n    }\n}"
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "easy",
    topic: "Stack",
    prompt:
      "Given a string containing just brackets ()[]{} determine if the input string is valid.",
    example: "Input: s = \"()[]{}\" | Output: true",
    starter:
      "import java.util.*;\n\nclass Solution {\n    public boolean isValid(String s) {\n        // your code\n        return false;\n    }\n}",
    solution:
      "import java.util.*;\n\nclass Solution {\n    public boolean isValid(String s) {\n        Deque<Character> stack = new ArrayDeque<>();\n        for (char c : s.toCharArray()) {\n            if (c == '(' || c == '[' || c == '{') {\n                stack.push(c);\n            } else {\n                if (stack.isEmpty()) {\n                    return false;\n                }\n                char top = stack.pop();\n                if ((c == ')' && top != '(') ||\n                    (c == ']' && top != '[') ||\n                    (c == '}' && top != '{')) {\n                    return false;\n                }\n            }\n        }\n        return stack.isEmpty();\n    }\n}"
  },
  {
    id: "max-subarray",
    title: "Maximum Subarray",
    difficulty: "medium",
    topic: "Dynamic Programming",
    prompt:
      "Find the contiguous subarray with the largest sum and return that sum.",
    example: "Input: nums = [-2,1,-3,4,-1,2,1,-5,4] | Output: 6",
    starter:
      "class Solution {\n    public int maxSubArray(int[] nums) {\n        // your code\n        return 0;\n    }\n}",
    solution:
      "class Solution {\n    public int maxSubArray(int[] nums) {\n        int current = nums[0];\n        int best = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            current = Math.max(nums[i], current + nums[i]);\n            best = Math.max(best, current);\n        }\n        return best;\n    }\n}"
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "medium",
    topic: "Sorting",
    prompt:
      "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
    example: "Input: [[1,3],[2,6],[8,10],[15,18]] | Output: [[1,6],[8,10],[15,18]]",
    starter:
      "import java.util.*;\n\nclass Solution {\n    public int[][] merge(int[][] intervals) {\n        // your code\n        return new int[][]{};\n    }\n}",
    solution:
      "import java.util.*;\n\nclass Solution {\n    public int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));\n        List<int[]> merged = new ArrayList<>();\n        for (int[] interval : intervals) {\n            if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {\n                merged.add(interval);\n            } else {\n                merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);\n            }\n        }\n        return merged.toArray(new int[merged.size()][]);\n    }\n}"
  },
  {
    id: "lru-cache",
    title: "Design LRU Cache",
    difficulty: "hard",
    topic: "HashMap + Doubly Linked List",
    prompt:
      "Design a data structure that follows Least Recently Used (LRU) cache behavior with get and put in O(1).",
    example: "Focus on class design, edge cases, and time complexity explanation.",
    starter:
      "import java.util.*;\n\nclass LRUCache {\n    public LRUCache(int capacity) {\n        // your code\n    }\n\n    public int get(int key) {\n        // your code\n        return -1;\n    }\n\n    public void put(int key, int value) {\n        // your code\n    }\n}",
    solution:
      "import java.util.*;\n\nclass LRUCache {\n    private final Map<Integer, Integer> map;\n\n    public LRUCache(int capacity) {\n        map = new LinkedHashMap<>(capacity, 0.75f, true) {\n            protected boolean removeEldestEntry(Map.Entry<Integer, Integer> eldest) {\n                return size() > capacity;\n            }\n        };\n    }\n\n    public int get(int key) {\n        return map.getOrDefault(key, -1);\n    }\n\n    public void put(int key, int value) {\n        map.put(key, value);\n    }\n}"
  }
];

const memoryStore = {};

const storage = {
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return Object.prototype.hasOwnProperty.call(memoryStore, key)
        ? memoryStore[key]
        : null;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
      return;
    } catch (error) {
      memoryStore[key] = value;
    }
  }
};

const state = {
  selectedId: null,
  search: "",
  category: "all",
  difficulty: "all",
  codingQuestionId: codingQuestions[0].id,
  codingSecondsLeft: 30 * 60,
  codingTimerId: null
};

const elements = {
  searchInput: document.getElementById("searchInput"),
  categorySelect: document.getElementById("categorySelect"),
  difficultySelect: document.getElementById("difficultySelect"),
  questionList: document.getElementById("questionList"),
  resultCount: document.getElementById("resultCount"),
  totalCount: document.getElementById("totalCount"),
  practicedCount: document.getElementById("practicedCount"),
  confidentCount: document.getElementById("confidentCount"),
  detailEmpty: document.getElementById("detailEmpty"),
  questionDetail: document.getElementById("questionDetail"),
  detailCategory: document.getElementById("detailCategory"),
  detailDifficulty: document.getElementById("detailDifficulty"),
  detailQuestion: document.getElementById("detailQuestion"),
  showAnswerBtn: document.getElementById("showAnswerBtn"),
  answerBlock: document.getElementById("answerBlock"),
  detailAnswer: document.getElementById("detailAnswer"),
  detailExplanation: document.getElementById("detailExplanation"),
  markPracticedBtn: document.getElementById("markPracticedBtn"),
  markConfidentBtn: document.getElementById("markConfidentBtn"),
  addQuestionForm: document.getElementById("addQuestionForm"),
  customQuestion: document.getElementById("customQuestion"),
  customAnswer: document.getElementById("customAnswer"),
  customExplanation: document.getElementById("customExplanation"),
  customCategory: document.getElementById("customCategory"),
  customDifficulty: document.getElementById("customDifficulty"),
  quickPracticeBtn: document.getElementById("quickPracticeBtn"),
  codingQuestionSelect: document.getElementById("codingQuestionSelect"),
  codingDifficulty: document.getElementById("codingDifficulty"),
  codingTopic: document.getElementById("codingTopic"),
  codingTitle: document.getElementById("codingTitle"),
  codingPrompt: document.getElementById("codingPrompt"),
  codingExample: document.getElementById("codingExample"),
  codingTimer: document.getElementById("codingTimer"),
  startTimerBtn: document.getElementById("startTimerBtn"),
  resetTimerBtn: document.getElementById("resetTimerBtn"),
  codingEditor: document.getElementById("codingEditor"),
  saveDraftBtn: document.getElementById("saveDraftBtn"),
  resetCodeBtn: document.getElementById("resetCodeBtn"),
  showSolutionBtn: document.getElementById("showSolutionBtn"),
  solutionBlock: document.getElementById("solutionBlock")
};

function readJson(key, fallback) {
  try {
    return JSON.parse(storage.getItem(key)) ?? fallback;
  } catch (error) {
    return fallback;
  }
}

function getCustomQuestions() {
  return readJson(STORAGE_KEYS.customQuestions, []);
}

function getAllQuestions() {
  return [...defaultQuestions, ...getCustomQuestions()];
}

function getPracticedSet() {
  return new Set(readJson(STORAGE_KEYS.practiced, []));
}

function getConfidentSet() {
  return new Set(readJson(STORAGE_KEYS.confident, []));
}

function saveSet(key, setObj) {
  storage.setItem(key, JSON.stringify([...setObj]));
}

function getCodingDrafts() {
  return readJson(STORAGE_KEYS.codingDrafts, {});
}

function saveCodingDrafts(drafts) {
  storage.setItem(STORAGE_KEYS.codingDrafts, JSON.stringify(drafts));
}

function getActiveCodingQuestion() {
  return codingQuestions.find((q) => q.id === state.codingQuestionId) || codingQuestions[0];
}

function formatSeconds(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (totalSeconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function renderTimer() {
  elements.codingTimer.textContent = formatSeconds(state.codingSecondsLeft);
}

function stopCodingTimer() {
  if (state.codingTimerId) {
    clearInterval(state.codingTimerId);
    state.codingTimerId = null;
  }
  elements.startTimerBtn.textContent = "Start Timer";
}

function toggleCodingTimer() {
  if (state.codingTimerId) {
    stopCodingTimer();
    return;
  }

  state.codingTimerId = setInterval(() => {
    if (state.codingSecondsLeft <= 0) {
      stopCodingTimer();
      alert("Time is up. Review your code and solution approach.");
      return;
    }
    state.codingSecondsLeft -= 1;
    renderTimer();
  }, 1000);

  elements.startTimerBtn.textContent = "Pause Timer";
}

function resetCodingTimer() {
  stopCodingTimer();
  state.codingSecondsLeft = 30 * 60;
  renderTimer();
}

function renderCodingQuestionOptions() {
  elements.codingQuestionSelect.innerHTML = "";
  codingQuestions.forEach((question) => {
    const option = document.createElement("option");
    option.value = question.id;
    option.textContent = `${question.title} (${question.difficulty})`;
    elements.codingQuestionSelect.append(option);
  });
  elements.codingQuestionSelect.value = state.codingQuestionId;
}

function renderCodingRound() {
  const question = getActiveCodingQuestion();
  const drafts = getCodingDrafts();

  elements.codingDifficulty.textContent = question.difficulty.toUpperCase();
  elements.codingTopic.textContent = question.topic;
  elements.codingTitle.textContent = question.title;
  elements.codingPrompt.textContent = question.prompt;
  elements.codingExample.textContent = `Example: ${question.example}`;
  elements.codingEditor.value = drafts[question.id] || question.starter;
  elements.solutionBlock.classList.add("hidden");
  elements.solutionBlock.textContent = question.solution;
}

function saveCurrentDraft() {
  const question = getActiveCodingQuestion();
  const drafts = getCodingDrafts();
  drafts[question.id] = elements.codingEditor.value;
  saveCodingDrafts(drafts);
  alert("Draft saved.");
}

function resetCurrentCode() {
  const question = getActiveCodingQuestion();
  elements.codingEditor.value = question.starter;
}

function toggleSolution() {
  elements.solutionBlock.classList.toggle("hidden");
  elements.showSolutionBtn.textContent = elements.solutionBlock.classList.contains("hidden")
    ? "Show Sample Solution"
    : "Hide Sample Solution";
}

function uniqueCategories(questions) {
  return [...new Set(questions.map((q) => q.category))].sort();
}

function filterQuestions(questions) {
  return questions.filter((q) => {
    const searchHit =
      q.question.toLowerCase().includes(state.search) ||
      q.answer.toLowerCase().includes(state.search) ||
      q.category.toLowerCase().includes(state.search);
    const categoryHit = state.category === "all" || q.category === state.category;
    const difficultyHit =
      state.difficulty === "all" || q.difficulty === state.difficulty;
    return searchHit && categoryHit && difficultyHit;
  });
}

function renderCategoryFilter(questions) {
  const current = elements.categorySelect.value;
  elements.categorySelect.innerHTML = '<option value="all">All Categories</option>';
  uniqueCategories(questions).forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.categorySelect.append(option);
  });
  if ([...elements.categorySelect.options].some((opt) => opt.value === current)) {
    elements.categorySelect.value = current;
  }
}

function renderQuestionList() {
  const allQuestions = getAllQuestions();
  const practicedSet = getPracticedSet();
  const confidentSet = getConfidentSet();

  renderCategoryFilter(allQuestions);
  const filtered = filterQuestions(allQuestions);

  elements.questionList.innerHTML = "";
  elements.resultCount.textContent = `${filtered.length} results`;

  filtered.forEach((q) => {
    const card = document.createElement("div");
    card.className = "question-item";
    if (state.selectedId === q.id) {
      card.classList.add("active");
    }

    const practiced = practicedSet.has(q.id) ? "Practiced" : "Not Practiced";
    const confident = confidentSet.has(q.id) ? "Confident" : "Revise";

    card.innerHTML = `
      <p><strong>Q${q.id}.</strong> ${q.question}</p>
      <p class="meta">${q.category} | ${q.difficulty.toUpperCase()} | ${practiced} | ${confident}</p>
    `;

    card.addEventListener("click", () => {
      state.selectedId = q.id;
      renderQuestionList();
      renderQuestionDetail();
    });

    elements.questionList.append(card);
  });

  elements.totalCount.textContent = allQuestions.length;
  elements.practicedCount.textContent = practicedSet.size;
  elements.confidentCount.textContent = confidentSet.size;
}

function renderQuestionDetail() {
  const question = getAllQuestions().find((q) => q.id === state.selectedId);
  if (!question) {
    elements.questionDetail.classList.add("hidden");
    elements.detailEmpty.classList.remove("hidden");
    return;
  }

  elements.detailEmpty.classList.add("hidden");
  elements.questionDetail.classList.remove("hidden");

  elements.detailCategory.textContent = question.category;
  elements.detailDifficulty.textContent = question.difficulty;
  elements.detailQuestion.textContent = question.question;
  elements.detailAnswer.textContent = question.answer;
  elements.detailExplanation.textContent = question.explanation || "No explanation added.";
  elements.answerBlock.classList.add("hidden");
}

function quickPractice() {
  const filtered = filterQuestions(getAllQuestions());
  if (!filtered.length) {
    alert("No questions found for current filters.");
    return;
  }
  const next = filtered[Math.floor(Math.random() * filtered.length)];
  state.selectedId = next.id;
  renderQuestionList();
  renderQuestionDetail();
}

function markPracticed(confident = false) {
  if (!state.selectedId) {
    return;
  }

  const practicedSet = getPracticedSet();
  practicedSet.add(state.selectedId);
  saveSet(STORAGE_KEYS.practiced, practicedSet);

  if (confident) {
    const confidentSet = getConfidentSet();
    confidentSet.add(state.selectedId);
    saveSet(STORAGE_KEYS.confident, confidentSet);
  }

  renderQuestionList();
}

function addCustomQuestion(event) {
  event.preventDefault();
  const customQuestions = getCustomQuestions();
  const all = getAllQuestions();

  const nextId = all.length ? Math.max(...all.map((q) => q.id)) + 1 : 1;

  customQuestions.push({
    id: nextId,
    category: elements.customCategory.value,
    difficulty: elements.customDifficulty.value,
    question: elements.customQuestion.value.trim(),
    answer: elements.customAnswer.value.trim(),
    explanation: elements.customExplanation.value.trim() || "Added by user"
  });

  storage.setItem(STORAGE_KEYS.customQuestions, JSON.stringify(customQuestions));

  elements.addQuestionForm.reset();
  state.selectedId = nextId;
  renderQuestionList();
  renderQuestionDetail();
}

function assertElementsReady() {
  const missing = Object.entries(elements)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length) {
    throw new Error(`Missing required HTML elements: ${missing.join(", ")}`);
  }
}

function initEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderQuestionList();
  });

  elements.categorySelect.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderQuestionList();
  });

  elements.difficultySelect.addEventListener("change", (event) => {
    state.difficulty = event.target.value;
    renderQuestionList();
  });

  elements.showAnswerBtn.addEventListener("click", () => {
    elements.answerBlock.classList.toggle("hidden");
  });

  elements.markPracticedBtn.addEventListener("click", () => markPracticed(false));
  elements.markConfidentBtn.addEventListener("click", () => markPracticed(true));
  elements.addQuestionForm.addEventListener("submit", addCustomQuestion);
  elements.quickPracticeBtn.addEventListener("click", quickPractice);

  elements.codingQuestionSelect.addEventListener("change", (event) => {
    state.codingQuestionId = event.target.value;
    resetCodingTimer();
    renderCodingRound();
  });

  elements.startTimerBtn.addEventListener("click", toggleCodingTimer);
  elements.resetTimerBtn.addEventListener("click", resetCodingTimer);
  elements.saveDraftBtn.addEventListener("click", saveCurrentDraft);
  elements.resetCodeBtn.addEventListener("click", resetCurrentCode);
  elements.showSolutionBtn.addEventListener("click", toggleSolution);
}

function init() {
  assertElementsReady();
  initEvents();
  renderQuestionList();
  renderQuestionDetail();
  renderCodingQuestionOptions();
  resetCodingTimer();
  renderCodingRound();
}

function boot() {
  try {
    init();
  } catch (error) {
    console.error("Java Interview Platform failed to load:", error);
    alert("App failed to load. Please refresh once. If issue continues, open index.html directly in Chrome or Edge.");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
