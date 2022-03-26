# Digital Disaster Relief

1. docker run --name aspire-client -d -p 80:80 aspire-client:1

2. docker build . -t anokhadocker/aspire-client:1

3. docker push anokhadocker/aspire-client:1  

4. kubectl apply -f client.yaml

5. kubectl delete -f client.yaml

6 a) minikube docker-env  b) eval $(minikube docker-env)

7. minikube ssh

8. kubectl -it exec react-client-pod sh

9. minikube service react-client-service

