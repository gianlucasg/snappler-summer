require 'json'

class DataBase

    def initialize()
      @data_hash = JSON.parse(File.read("./lib/swapi.json"))
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