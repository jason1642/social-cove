Rails.application.routes.draw do
  resources :comments
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/user/follow', to: 'follow#follow_user'
  get 'user/:id/following', to: 'follow#following_list'
  get 'user/:id/followers', to: 'follow#followers_list'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'


  # To make sure a paramter matches a regular expression
  # resources :users, constraints: { id: /[A-Z]/}
  # Look into member and collection block to add unique restful actions 

  resources :users do
    member do
      get :posts, :comments
    end

  end

  resources :posts do
    resources :comments
    
  end
  # Use this when creating the posts model/controllers
  # resources :users do
  #   resources :posts, shallow: true
  # end


  # Defines the root path route ("/")
  resolve('User') {[:user]}
  # root "articles#index"
end
