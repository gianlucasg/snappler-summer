def palindrome?(string)
    string.reverse === string
end

def all_longest_strings(inputArray)
    array = []
    max = inputArray.max.size
    inputArray.map do |a|
        if a.size == max
            arr.push(a)
        end
    end 
    puts array
end
def validate_email(mail)
    mail.match?(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i)  
end
def text_to_num(string)
    data = {
        'A':2,'B':2,'C':2,
        'D':3,'E':3,'F':3,
        'G':4,'H':4,'I':4,
        'J':5,'K':5,'L':5,
        'M':6,'N':6,'O':6,
        'P':7,'Q':7,'R':7,'S':7,
        'T':8,'U':8,'V':8,
        'W':9,'X':9,'Y':9,'Z':9,
    }
    puts string.upcase
    
    string.gsub([A..Z]){|letra| data[letra.to_sym]}

end

def open_people_csv()
    CSV.read("people.csv")
end
def people_18_year_old()
    file = open_people_csv()
    file.select |row| do
        row["birth_date"] 
    end
end
text = "123-647-EYES"

puts text_to_num("123-647-EYES")
#inputArray = ["aba", "aa", "ad", "vcd", "aba"]
#puts validate_email("hola@gmail12345.com")

