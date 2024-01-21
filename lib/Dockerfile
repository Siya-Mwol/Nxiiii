FROM quay.io/toxic_kichux/whatskrizai:latest
RUN git clone https://github.com/Siya-Mwol/Nxiiii /root/Nxiiii/
WORKDIR /root/Nxiiii/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"]
