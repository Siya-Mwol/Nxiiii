FROM quay.io/toxic_kichux/whatskrizai:latest
RUN git clone https://github.com/S-U-P-E-R-I-O-R/HILUX-BOT /root/HKLUX-BOT/
WORKDIR /root/HILUX-BOT/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"]
