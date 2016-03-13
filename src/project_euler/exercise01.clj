(ns project-euler.exercise01)

(def numbers (range 1000))

(defn isMultiple3or5 [number]
  (if (or (= (mod number 5) 0) (= (mod number 3) 0))
    number
    0))

; solution is 233168
(reduce + (map isMultiple3or5 numbers))
