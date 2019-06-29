# I am using Archlinux since I know it best and it is very lightweight
FROM archlinux/base

# You can use another mirrorlist from
# https://archlinux.org/mirrorlist/
# If you want to take advantage of servers others than french ones
COPY ./mirrorlist /etc/pacman.d/mirrorlist

# I installing a bunch of tools for a better DX before installing elm globally
RUN pacman -Syy --noconfirm glibc nodejs npm vim vim-ale git ttf-fira-code zsh gawk vim-nerdtree vim-ctrlp vim-airline vim-gitgutter vim-fugitive
# I create a non-privileged user called "elm" in order
# to not mess with your local files permissions
RUN useradd -G wheel -s /bin/zsh -m elm

# From now we substitute as the "elm" user
USER elm

# We configure the path to install package globally
# without messing up with the system binary global path
ENV PATH=$PATH:/home/elm/.local/bin

# We need to tell NPM to use our newly created local binary
# path for global packages
RUN npm set prefix /home/elm/.local

# We install elm and his ecosystem of packages globally for convenience
RUN npm install --global elm elm-test elm-format elm-oracle

# Installing the Elm plugin for Vim
RUN git clone https://github.com/ElmCast/elm-vim.git /home/elm/.vim/pack/bundle/start/elm-vim

# Installing the Palenight colorscheme for Vim
RUN git clone https://github.com/drewtempelmeyer/palenight.vim /home/elm/.vim/pack/bundle/start/palenight

# Installing OhMyZSH for the Elm user
RUN curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | bash -

# Vim custom setup to enhance DX
COPY ./vim /home/elm/.vim/pack/bundle/start/vim

# We expose the port 8000 for the elm server
EXPOSE 8000

ENTRYPOINT [ "elm" ]

CMD [ "reactor" ]
