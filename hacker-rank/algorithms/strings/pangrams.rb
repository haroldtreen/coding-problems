# Pangrams
# https://www.hackerrank.com/challenges/pangrams

letter_used = {};
used_count = 0;

('a'..'z').each{ |letter| letter_used[letter] = false }

candidate_pangram = gets.to_s

candidate_pangram.each_char do |letter|
    letter = letter.downcase
    unless letter_used[letter]
        letter_used[letter] = true
        used_count+=1
    end
    break if used_count == letter_used.length
end

if used_count == letter_used.length
    print "pangram"
else
    print "not pangram"
end