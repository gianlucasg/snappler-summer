require "gianlucasgema"
require "sinatra"

persona = Person.new('people')
vehicle = Vehicle.new('vehicles')
starship = Starship.new('starships')

get '/person/:id' do
    persona.find_by_key_value(k,params["id"]) 
end

get '/vehicle/:id' do
    vehicle.find_by_key_value(k,params["id"]) 
end

get '/starship/:id' do
    starship.find_by_key_value(k,params["id"]) 
end
    
