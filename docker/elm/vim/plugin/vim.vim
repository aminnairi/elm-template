" default Vim rules
set ruler
set expandtab
set number
set shiftwidth=4
set softtabstop=4
set tabstop=4
set background=dark
colorscheme palenight
set guifont=Fira\ Code\ 12
set encoding=UTF-8
set nowrap

" NERDTree specific rules
autocmd vimenter * NERDTree
map <C-n> :NERDTreeToggle<CR>
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

" CtrlP specific rule overrides
let g:ctrlp_custom_ignore = '\v[\/](elm-stuff|node_modules|public|\.(git|hg|svn))$'

