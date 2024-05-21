# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: cmariot <cmariot@student.42.fr>            +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2022/08/31 16:08:49 by cmariot           #+#    #+#              #
#    Updated: 2024/05/21 15:25:49 by cmariot          ###   ########.fr        #
#                                                                              #
# **************************************************************************** #


PROJECT_NAME 				= rag
DC							= docker compose


# Docker compose up : build and start containers
up:
	${DC} up --build


# Clean : stop and remove unused containers, volumes and images, networks
# The volumes and the data are kept
clean: stop
	docker system prune -a --force


# Fclean : stop and remove all containers, volumes and images, networks,
# the volumes and the data
# Use this command to reset the project
fclean: stop rm_directories
	docker system prune -a --force --volumes
	# docker volume rm -f inception_wordpress_volume\
	# 					inception_mariadb_volume\
	# 					inception_nginx_config\
	# 					inception_nginx_certs\
	# 					inception_redis_data


# Re : fclean and up
re: fclean up


# List containers
ps:
	${DC} ps


# A better list of containers
list:
	@printf "CONTAINERS LIST :\n"
	@docker container ls
	@printf "\nIMAGES LIST :\n"
	@docker image ls
	@printf "\nVOLUMES LIST :\n"
	@docker volume ls
	@printf "\nNETWORKS LIST :\n"
	@docker network ls


image:
	${DC} images


pause:
	${DC} pause


unpause:
	${DC} unpause


start:
	${DC} start


stop:
	${DC} stop


restart:
	${DC} restart
