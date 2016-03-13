(ns project-euler.exercise01)

; If we list all the natural numbers below 10 that are multiples of 3 or 5,
; we get 3, 5, 6 and 9. The sum of these multiples is 23.
; Find the sum of all the multiples of 3 or 5 below 1000.

Find the sum of all the multiples of 3 or 5 below 1000.

(def numbers (range 1000))

(defn isMultiple3or5 [number]
  (if (or (= (mod number 5) 0) (= (mod number 3) 0))
    number
    0))

; Solution is 233168
(reduce + (map isMultiple3or5 numbers))
