EmberSandbox::Application.routes.draw do
  resources :developers
  resources :tables


  get "pages/index"
  root :to => 'pages#index'
  
end
