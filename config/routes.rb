EmberSandbox::Application.routes.draw do
  resources :developers


  get "pages/index"

  root :to => 'pages#index'
  
end
