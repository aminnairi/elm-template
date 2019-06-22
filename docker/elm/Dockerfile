# I am using Archlinux since I know it best and it is very lightweight
FROM archlinux/base

# You can use another mirrorlist from
# https://archlinux.org/mirrorlist/
# If you want to take advantage of servers others than french ones
COPY ./mirrorlist /ec/pacman.d/mirrorlist

# I installing nodejs and npm before installing elm globally
RUN pacman -Syyu --noconfirm nodejs npm vim vim-ale
# I create a non-privileged user called "elm" in order
# to not mess with your local files permissions
RUN useradd -G wheel -s /bin/bash -m elm

# From now we substitute as the "elm" user
USER elm elm-test elm-format elm-oracle

# We configure the path to install package globally
# without messing up with the system binary global path
ENV PATH=$PATH:/home/elm/.local/bin

# We need to tell NPM to use our newly created local binary
# path for global packages
RUN npm set prefix /home/elm/.local

# We install elm globally for convenience
RUN npm install --global elm

# We expose the port 8000 for the elm server
EXPOSE 8000

ENTRYPOINT [ "elm" ]

CMD [ "reactor" ]