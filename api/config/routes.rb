Rails.application.routes.draw do
  resources :group_chats
  resources :private_chats
  resources :comments
  resources :posts
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/users/follow', to: 'follow#follow_user'
  get 'users/:id/following', to: 'follow#following_list'
  get 'users/:id/followers', to: 'follow#followers_list'
  get 'users/:id/verbose_info', to: 'users#show_verbose'

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/auth/verify/verbose-info', to: 'authentication#verify_and_verbose_info'

  # PRIVATE CHATS
  post '/private_chat/send_message', to: 'private_chats#send_private_message'
  post '/private_chat/conversation', to: 'private_chats#show'
  # GROUP CHATS


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
