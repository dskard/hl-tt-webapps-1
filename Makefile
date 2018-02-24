install:
	for i in 1 2 3 4 5 6 7 8 9 ; do \
	    cd v$${i}*; npm install; cd -; \
	done

start:
	for i in 1 2 3 4 5 6 7 8 9 ; do \
	    cd v$${i}*; PORT=300$${i} npm start & cd -; \
	done

stop:
	killall node

distclean:
	for i in 1 2 3 4 5 6 7 8 9 ; do \
	    cd v$${i}*; rm -rf node_modules; cd -; \
	done
