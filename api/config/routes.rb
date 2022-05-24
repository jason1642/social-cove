Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # post '/create-user', to: 'users#create'
  # put 'user/:id/edit', to: 'users#update'
  # delete 'user/:id/delete', to: 'users#delete'
  # get 'user/find-all', to: 'users#index'
  # get 'user/:id/find-one', to: 'users#findOneById'

  # To make sure a paramter matches a regular expression
  # resources :users, constraints: { id: /[A-Z]/}
  # Look at member and collection block to add unique restful actions 

  resources :users

  # Use this when creating the posts model/controllers
  # resources :users do
  #   resources :posts, shallow: true
  # end


  # Defines the root path route ("/")
  resolve('User') {[:user]}
  # root "articles#index"
end
