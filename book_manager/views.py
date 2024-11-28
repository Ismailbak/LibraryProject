from django.shortcuts import render

def book_list(request):
    return render (request, 'book_manager/book_list.html')
# Create your views here.
