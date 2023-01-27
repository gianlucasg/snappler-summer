# frozen_string_literal: true

require 'json'
require 'debug'

# https://ruby-doc.org/core-3.1.1/File.html
# Read JSON file

# https://ruby-doc.org/stdlib-3.1.1/libdoc/json/rdoc/JSON.html
# Parse JSON content to Hash

# https://github.com/ruby/debug
# debugger

class DataBase

    def initialize()
      @data_hash = JSON.parse(File.read("swapi.json"))
    end
end
	
module Methods

    def find_by_key_value(k,v) 
        getData.select{|pers| pers[k] == v}
    end

    def find_by_name(name)
        getData.select{|pers| pers.has_value?(name)}
    end
end

module Relation

end
class Person < DataBase
    attr_accessor :people
    include Methods

    def initialize(key)
        super()
        @people = @data_hash[key]
    end
    
    def getData
        people
    end

end

class Starship < DataBase
    attr_accessor :starships
    include Methods

    def initialize(key)
        super()
        @starships = @data_hash[key]
    end

    def getData
        starships
    end
end

class Vehicle < DataBase
    attr_accessor :vehicles
    include Methods

    def initialize(key)
        super()
        @vehicles = @data_hash[key]
    end

    def getData
        vehicles
    end
end

database = DataBase.new()
person_data = Person.new('people')
vehicles_data = Vehicle.new('vehicles')
puts person_data.find_by_key_value('name', 'Luke Skywalker')
puts person_data.find_by_name('Obi-Wan Kenobi')
puts vehicles_data.find_by_name('Snowspeeder')

